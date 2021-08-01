<template>
	<RadioGroup
		:model-value="modelValue"
		@update:model-value="setOption"
	>
		<RadioGroupLabel>
			<span class="title">{{ title }}</span>
		</RadioGroupLabel>
		<div class="options">
			<RadioGroupOption
				v-for="option in options"
				v-slot="{ active, checked }"
				:key="option.id"
				:value="option.id"
				class="option"
			>
				<div
					class="body"
					:class="{ active, checked }"
				>
					<div
						class="imagery"
						:class="{ wide: compact }"
					>
						<OptionImage
							:group="group"
							:value="option.id"
						/>
					</div>
					<div
						v-if="!compact"
						class="name"
					>
						{{ option.name }}
					</div>
				</div>
			</RadioGroupOption>
		</div>
	</RadioGroup>
</template>

<script lang="ts">
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue';
import { PropType, defineComponent } from 'vue';

import OptionImage from './image/OptionImage.vue';

export interface Option {
	id: string;
	name: string;
}

export default defineComponent({
	components: {
		OptionImage,
		RadioGroup,
		RadioGroupLabel,
		RadioGroupOption,
	},
	props: {
		group: {
			type: String,
			default: '',
		},
		title: {
			type: String,
			default: '',
		},
		options: {
			type: Array as PropType<Option[]>,
			required: true,
		},
		modelValue: {
			type: String,
			required: true,
		},
		compact: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['update:modelValue'],
	setup(_props, { emit }) {
		function setOption(id: string) {
			emit('update:modelValue', id);
		}

		return {
			setOption,
		};
	},
});
</script>

<style scoped>
.title {
	color: var(--text-secondary);
}

.options {
	display: flex;
	margin-top: 4px;
}

.option {
	margin-right: 16px;
	outline: none;
}

.body {
	border: 2px solid var(--border-normal);
	border-radius: var(--border-radius);
}

.body.checked {
	border-color: var(--border-selected);
}

.body.active {
	border-color: var(--border-focused);
}

.imagery {
	width: 128px;
	height: 64px;
	border-radius: 14px 14px 0 0;
	filter: grayscale(0.65);
}

.imagery.wide {
	height: 32px;
}

.body.checked > .imagery {
	filter: grayscale(0);
}

.name {
	margin: 2px 0;
	font-size: 14px;
	text-align: center;
}

.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	margin: -1px;
	padding: 0;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	border-width: 0;
	white-space: nowrap;
}
</style>
