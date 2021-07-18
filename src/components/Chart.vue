<template>
	<ApexChart
		width="100%"
		height="100%"
		:type="type"
		:options="options"
		:series="series"
	/>
</template>

<script lang="ts">
import { PropType, defineComponent, toRefs, computed } from 'vue';
import ApexChart from 'vue3-apexcharts';

import { CSV } from '@/utils/csv';

type Type = 'line' | 'area' | 'bar';

export default defineComponent({
	components: {
		ApexChart,
	},
	props: {
		type: {
			type: String as PropType<Type>,
			default: 'bar',
		},
		isStacked: {
			type: Boolean,
			default: false,
		},
		isNormalized: {
			type: Boolean,
			default: false,
		},
		data: {
			type: Object as PropType<CSV>,
			required: true,
		},
	},
	setup(props) {
		const { type, isStacked, isNormalized, data } = toRefs(props);

		const series = computed(() => {
			const totals = data.value.values.reduce((totals, a) => {
				return a.map((value, index) => {
					const total = totals[index] || 0;
					return total + value;
				});
			}, new Array<number>(data.value.timestamps.length));
			const series = data.value.ids.map((name, index) => {
				const values = data.value.values.map(a => a[index]);
				return {
					name,
					data: isNormalized.value
						? values.map((value, index) => value / totals[index])
						: values,
				};
			});
			return series;
		});

		const options = computed(() => {
			return {
				chart: {
					id: 'chart',
					type: type.value,
					stacked: isStacked.value,
					stackType: 'normal',
					toolbar: {
						show: false,
					},
					zoom: {
						enabled: false,
					},
					fontFamily: 'Sarabun, Helvetica, Arial, sans-serif',
				},
				xaxis: {
					type: 'datetime',
					tooltip: {
						enabled: false,
					},
					categories: data.value.timestamps.map(timestamp => timestamp * 1000),
				},
				yaxis: {
					labels: {
						formatter: isNormalized.value ? formatShare : formatValue,
					},
					min: isNormalized.value ? 0 : undefined,
					max: isNormalized.value ? 1 : undefined,
				},
				legend: {
					onItemHover: {
						highlightDataSeries: false,
					},
				},
				dataLabels: {
					enabled: false,
				},
				fill: {
					type: 'solid',
					opacity: 1,
				},
				stroke: {
					show: type.value === 'line' ? true : false,
				},
			};
		});

		function formatValue(value: number) {
			const valueFormat = new Intl.NumberFormat('en-US', {
				// @ts-ignore
				notation: 'compact',
				style: 'currency',
				currency: 'usd',
				minimumFractionDigits: 0,
				maximumFractionDigits: 1,
			});
			return valueFormat.format(value);
		}

		function formatShare(value: number) {
			const valueFormat = new Intl.NumberFormat('en-US', {
				style: 'percent',
				minimumFractionDigits: 1,
				maximumFractionDigits: 2,
			});
			return valueFormat.format(value);
		}

		return {
			series,
			options,
		};
	},
});
</script>

<style>
.apexcharts-text tspan,
.apexcharts-yaxis-label tspan,
.apexcharts-xaxis-label tspan {
	fill: var(--text-secondary);
}

.apexcharts-gridline {
	stroke: var(--text-secondary);
	opacity: 0.15;
}

.apexcharts-legend-text {
	color: var(--text-secondary) !important;
}
</style>
