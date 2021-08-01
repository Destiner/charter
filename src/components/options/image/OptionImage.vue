<template>
	<OptionImageFormat
		v-if="group === 'format'"
		:value="value"
	/>
	<OptionImageType
		v-if="group === 'type'"
		:value="value"
	/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import OptionImageFormat from './OptionImageFormat.vue';
import OptionImageType from './OptionImageType.vue';

export default defineComponent({
	components: {
		OptionImageFormat,
		OptionImageType,
	},
	props: {
		group: {
			type: String,
			required: true,
		},
		value: {
			type: String,
			required: true,
		},
	},
});
</script>
