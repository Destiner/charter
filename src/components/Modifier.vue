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
	width: 128px;
	padding: 8px 0;
	border: 2px solid #f3f4f6;
	border-radius: 16px;
	background: transparent;
	font-size: 16px;
}

.switch.enabled {
	border-color: #93c5fd;
}
</style>
