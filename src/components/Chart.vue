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
import interpolate from 'color-interpolate';
import { PropType, defineComponent, toRefs, computed } from 'vue';
import ApexChart from 'vue3-apexcharts';

import { CSV } from '@/utils/csv';

type Type = 'line' | 'area' | 'bar';
type ColorScheme = 'forest' | 'ocean' | 'volcano';

export default defineComponent({
	components: {
		ApexChart,
	},
	props: {
		type: {
			type: String as PropType<Type>,
			default: 'bar',
		},
		colors: {
			type: String as PropType<ColorScheme>,
			default: 'forest',
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
		const { type, colors, isStacked, isNormalized, data } = toRefs(props);

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
				colors: getColors(colors.value, data.value.ids.length),
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

		function getColors(scheme: ColorScheme, count: number): string[] {
			const paletteMap: Record<ColorScheme, [string, string]> = {
				'forest': ['#f8fcf6', '#194220'],
				'ocean': ['#f8fbff', '#152f67'],
				'volcano': ['#fdf5ec', '#752d13'],
			};

			const palette = interpolate(paletteMap[scheme]);
			const colors = [];
			for (let i = 0; i < count; i++) {
				const color = palette((i + 1) / (count + 1));
				colors.push(color);
			}
			console.log(scheme, count, palette, colors);
			return colors;
		}

		return {
			series,
			options,
		};
	},
});
</script>
