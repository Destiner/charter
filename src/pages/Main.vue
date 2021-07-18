<template>
	<div class="page">
		<div class="input">
			<div>
				<h2>Data</h2>
				<label for="data">Choose data source:</label>
				<input 
					type="file" 
					name="data" 
					accept="text/csv"
				>
			</div>
			<div>
				<h2>Chart Type</h2>
				<div class="chart-types" />
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
			</div>
		</div>
		<div class="output">
			<h2>Output</h2>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
	setup() {
		const isStacked = ref(false);
		const isNormalized = ref(false);

		return {
			isStacked,
			isNormalized,
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
</style>
