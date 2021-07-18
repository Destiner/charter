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
					<div class="modifier">
						<Switch
							v-model="isStacked"
							:class="{ 'active': isStacked }"
							class="switch"
						>
							<span class="sr-only">Stacked</span>
							<span
								:class="{ 'active': isStacked }"
								class="switch-body"
							/>
						</Switch>
						Stacked
					</div>

					<div class="modifier">
						<Switch
							v-model="isNormalized"
							:class="{ 'active': isNormalized }"
							class="switch"
						>
							<span class="sr-only">Normalized</span>
							<span
								:class="{ 'active': isNormalized }"
								class="switch-body"
							/>
						</Switch>
						Normalized
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
import { Switch } from '@headlessui/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
	components: {
		Switch,
	},
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

.switch {
	display: inline-flex;
	flex-shrink: 0;
	width: 54px;
	height: 28px;
	padding: 0;
	border: 2px outset transparent;
	border-radius: 14px;
	background: #0f766e;
	cursor: pointer;
}

.switch.active {
	background: #134e4a;
}

.switch-body {
	display: inline-block;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	background: white;
	pointer-events: none;
}

.switch-body.active {
	transform: translate(26px);
}

.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	margin: -1px;
	padding: 0;
	overflow: hidden;
	clip: rect(0,0,0,0);
	border-width: 0;
	white-space: nowrap;
}
</style>
