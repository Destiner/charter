<template>
	<div class="page">
		<div class="input">
			<div>
				<h2>Data</h2>
				<textarea
					v-model="dataText"
					type="text"
					rows="5"
					cols="40"
				/>
				<div v-if="data">
					{{ data.ids.length }} datasets, {{ data.values.length }} rows
				</div>
			</div>
			<div>
				<h2>Chart Type</h2>
				<div class="chart-types">
					<div>
						<input
							v-model="type"
							type="radio"
							name="type"
							value="line"
						>
						<label for="line">Line</label>
					</div>
					<div>
						<input
							v-model="type"
							type="radio"
							name="type"
							value="area"
						>
						<label for="area">Area</label>
					</div>
					<div>
						<input
							v-model="type"
							type="radio"
							name="type"
							value="bar"
						>
						<label for="bar">Bar</label>
					</div>
				</div>
				<div class="chart-modifiers">
					<div>
						<input
							v-model="isStacked"
							type="checkbox"
							name="stacked"
						>
						<label for="stacked">Stacked</label>
					</div>
					<div>
						<input
							v-model="isNormalized"
							type="checkbox"
							name="normalized"
						>
						<label for="normalized">Normalized</label>
					</div>
				</div>
			</div>
			<div>
				<h2>Color Scheme</h2>
				<div>
					<div>
						<input
							v-model="colors"
							type="radio"
							name="colors"
							value="forest"
						>
						<label for="forest">Forest</label>
					</div>
					<div>
						<input
							v-model="colors"
							type="radio"
							name="colors"
							value="ocean"
						>
						<label for="ocean">Ocean</label>
					</div>
					<div>
						<input
							v-model="colors"
							type="radio"
							name="colors"
							value="volcano"
						>
						<label for="volcano">Volcano</label>
					</div>
				</div>
			</div>
			<div>
				<h2>Aspect ratio</h2>
				<div>
					<div>
						<input
							v-model="ratio"
							type="radio"
							name="ratio"
							value="normal"
						>
						<label for="normal">Normal</label>
					</div>
					<div>
						<input
							v-model="ratio"
							type="radio"
							name="ratio"
							value="wide"
						>
						<label for="wide">Wide</label>
					</div>
				</div>
			</div>
		</div>
		<div class="output">
			<div v-if="data">
				<Chart
					:type="type"
					:colors="colors"
					:ratio="ratio"
					:is-stacked="isStacked"
					:is-normalized="isNormalized"
					:data="data"
				/>
			</div>
			<div v-else>
				Insert data to see the chart
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

import Chart from '@/components/Chart.vue';
import { SAMPLE, parse as parseCSV } from '@/utils/csv';

export default defineComponent({
	components: {
		Chart,
	},
	setup() {
		const dataText = ref(SAMPLE);
		const data = computed(() => parseCSV(dataText.value));

		const type = ref('line');
		const isStacked = ref(false);
		const isNormalized = ref(false);

		const colors = ref('forest');
		const ratio = ref('normal');

		return {
			dataText,
			data,

			type,
			isStacked,
			isNormalized,

			colors,
			ratio,
		};
	},
});
</script>

<style scoped>
.page {
	display: flex;
	margin: 32px 16px;
}

.input, .output {
	flex: 1;
}

.chart-modifiers {
	margin-top: 8px;
}
</style>
