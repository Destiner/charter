<template>
	<OptionImageType
		v-if="group === 'type'"
		:value="value"
	/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import OptionImageType from './OptionImageType.vue';

export default defineComponent({
	components: {
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
