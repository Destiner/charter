<template>
	<Switch
		:model-value="modelValue"
		class="switch"
		:class="{ enabled: modelValue }"
		@update:model-value="setEnabled"
	>
		<div>{{ label }}</div>
	</Switch>
</template>

<script lang="ts">
import { Switch } from '@headlessui/vue';
import { defineComponent } from 'vue';

export default defineComponent({
	components: {
		Switch,
	},
	props: {
		modelValue: {
			type: Boolean,
			required: true,
		},
		label: {
			type: String,
			required: true,
		},
	},
	emits: [ 'update:modelValue' ],
	setup(_props, { emit }) {
		function setEnabled(enabled: boolean) {
			emit('update:modelValue', enabled);
		}

		return {
			setEnabled,
		};
	},
});
</script>

<style scoped>
.switch {
	display: inline-flex;
	position: relative;
	align-items: center;
	justify-content: center;
	padding: 8px;
	border: 2px solid var(--border-normal);
	border-radius: var(--border-radius);
	background: transparent;
	color: var(--text-primary);
	font-size: 14px;
}

.switch.enabled {
	border-color: var(--border-selected);
}
</style>
