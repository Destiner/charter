<template>
	<div class="page">
		<div class="input">
			<div class="data">
				<h2>Data</h2>
				<textarea
					v-model="dataText"
					type="text"
					rows="5"
					cols="40"
				/>
			</div>
			<div class="options">
				<Options
					v-model="type"
					title="Type"
					group="type"
					:options="types"
				/>
				<div>
					<Modifier
						v-model="isStacked"
						:label="'Stacked'"
						class="modifier"
					/>
					<Modifier
						v-model="isNormalized"
						:label="'Normalized'"
						class="modifier"
					/>
				</div>
			</div>
			<div class="options">
				<Options
					v-model="format"
					title="Format"
					group="format"
					:options="formats"
				/>
			</div>
			<div class="options">
				<Options
					v-model="colorScheme"
					title="Color scheme"
					group="color"
					:options="colorSchemes"
				/>
			</div>
			<div class="options">
				<Options
					v-model="ratio"
					title="Aspect ratio"
					group="ratio"
					:options="ratios"
				/>
			</div>
		</div>
		<div class="output">
			<div v-if="data">
				<Chart
					:type="type"
					:format="format"
					:colors="colorScheme"
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
import Modifier from '@/components/Modifier.vue';
import Options from '@/components/options/Options.vue';
import { SAMPLE, parse as parseCSV } from '@/utils/csv';

const types = [{
	id: 'line',
	name: 'Line',
}, {
	id: 'area',
	name: 'Area',
}, {
	id: 'bar',
	name: 'Bar',
}];

const formats = [{
	id: 'number',
	name: 'Number',
}, {
	id: 'currency',
	name: 'Currency',
}, {
	id: 'percentage',
	name: 'Percentage',
}];

const colorSchemes = [{
	id: 'forest',
	name: 'Forest',
}, {
	id: 'ocean',
	name: 'Ocean',
}, {
	id: 'volcano',
	name: 'Volcano',
}];

const ratios = [{
	id: 'normal',
	name: 'Normal',
}, {
	id: 'wide',
	name: 'Wide',
}];

export default defineComponent({
	components: {
		Chart,
		Options,
		Modifier,
	},
	setup() {
		const dataText = ref(SAMPLE);
		const data = computed(() => parseCSV(dataText.value));

		const type = ref('line');
		const isStacked = ref(false);
		const isNormalized = ref(false);

		const format = ref('number');

		const colorScheme = ref('forest');

		const ratio = ref('normal');

		return {
			dataText,
			data,

			types,
			type,
			isStacked,
			isNormalized,

			formats,
			format,

			colorSchemes,
			colorScheme,

			ratios,
			ratio,
		};
	},
});
</script>

<style scoped>
textarea {
	padding: 8px;
	border: 2px solid var(--border-normal);
	border-radius: var(--border-radius);
	outline: none;
	font-size: 12px;
}

textarea:focus {
	border-color: var(--border-focused);
}

.page {
	display: flex;
	margin: 32px 16px;
}

.input, .output {
	flex: 1;
}

.data,
.options {
	margin-bottom: 16px;
}

.modifier {
	margin-right: 16px;
}
</style>
