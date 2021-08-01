<template>
	<ApexChart
		width="100%"
		:height="height"
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
type Format = 'number' | 'currency' | 'percentage';
type ColorScheme = 'forest' | 'ocean' | 'volcano';
type AspectRatio = 'normal' | 'wide';

export default defineComponent({
	components: {
		ApexChart,
	},
	props: {
		type: {
			type: String as PropType<Type>,
			default: 'bar',
		},
		format: {
			type: String as PropType<Format>,
			default: 'number',
		},
		colors: {
			type: String as PropType<ColorScheme>,
			default: 'forest',
		},
		ratio: {
			type: String as PropType<AspectRatio>,
			default: 'normal',
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
		const { type, format, colors, ratio, isStacked, isNormalized, data } = toRefs(props);

		const height = computed(() => {
			if (ratio.value === 'wide') {
				return '200px';
			}
			return '400px';
		});

		const series = computed(() => {
			const totals = data.value.values.map(values => values.reduce((total, value) => total + value));
			const max = data.value.values.reduce((max, value) => {
				const seriesMax = value.reduce((max, value) => max > value ? max : value);
				return seriesMax > max ? seriesMax : max;
			}, 0);
			const series = data.value.ids.map((name, index) => {
				const values = data.value.values.map(a => a[index]);
				return {
					name,
					type: type.value,
					data: !isNormalized.value
						? values
						: isStacked.value
							? values.map((value, index) => value / totals[index])
							: values.map((value) => value / max),
				};
			});
			return series;
		});

		const options = computed(() => {
			return {
				chart: {
					id: 'chart',
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
						formatter: getFormatter(format.value, isNormalized.value),
					},
					min: isNormalized.value ? 0 : undefined,
					max: isNormalized.value ? 1 : undefined,
				},
				legend: {
					position: 'top',
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

		function getFormatter(format: Format, isNormalized: boolean) {
			function formatNumber(value: number) {
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

			function formatCurrency(value: number) {
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

			if (isNormalized) {
				return formatShare;
			}
			if (format === 'number') {
				return formatNumber;
			}
			if (format === 'percentage') {
				return formatShare;
			}
			if (format === 'currency') {
				return formatCurrency;
			}
			return formatNumber;
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
			return colors;
		}

		return {
			height,
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

.apexcharts-tooltip {
	width: 160px;
	border: none !important;
	background: var(--bg-primary) !important;
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
	color: var(--text-primary) !important;
}

.apexcharts-tooltip-title {
	background: var(--bg-primary) !important;
	color: var(--text-secondary) !important;
}
</style>
