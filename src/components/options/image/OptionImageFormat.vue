<template>
	<svg
		v-if="value === 'number'"
		viewBox="0 0 128 64"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<g
			stroke="none"
			stroke-width="1"
			fill="none"
			fill-rule="evenodd"
		>
			<g transform="translate(-2.000000, -2.000000)">
				<g transform="translate(2.000000, 2.000000)">
					<path d="M14,0 L114,0 C121.731986,-1.42034288e-15 128,6.2680135 128,14 L128,32 L128,32 L0,32 L0,14 C-9.46895252e-16,6.2680135 6.2680135,1.42034288e-15 14,0 Z" />
					<text
						font-size="18"
						font-weight="400"
						fill="#93C5FD"
					>
						<tspan
							x="54"
							y="22"
						>
							42
						</tspan>
					</text>
				</g>
			</g>
		</g>
	</svg>
	<svg
		v-else-if="value === 'currency'"
		viewBox="0 0 128 64"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<g
			stroke="none"
			stroke-width="1"
			fill="none"
			fill-rule="evenodd"
		>
			<g transform="translate(-156.000000, -2.000000)">
				<g transform="translate(154.000000, 0.000000)">
					<g transform="translate(2.000000, 2.000000)">
						<path d="M14,0 L114,0 C121.731986,-1.42034288e-15 128,6.2680135 128,14 L128,32 L128,32 L0,32 L0,14 C-9.46895252e-16,6.2680135 6.2680135,1.42034288e-15 14,0 Z" />
						<text
							font-size="18"
							font-weight="400"
							fill="#93C5FD"
						>
							<tspan
								x="44"
								y="22"
							>
								$300
							</tspan>
						</text>
					</g>
				</g>
			</g>
		</g>
	</svg>
	<svg
		v-else-if="value === 'percentage'"
		viewBox="0 0 128 64"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<g
			stroke="none"
			stroke-width="1"
			fill="none"
			fill-rule="evenodd"
		>
			<g transform="translate(-310.000000, -2.000000)">
				<g transform="translate(308.000000, 0.000000)">
					<g transform="translate(2.000000, 2.000000)">
						<path d="M14,0 L114,0 C121.731986,-1.42034288e-15 128,6.2680135 128,14 L128,32 L128,32 L0,32 L0,14 C-9.46895252e-16,6.2680135 6.2680135,1.42034288e-15 14,0 Z" />
						<text
							font-size="18"
							font-weight="400"
							fill="#93C5FD"
						>
							<tspan
								x="47"
								y="23"
							>
								88%
							</tspan>
						</text>
					</g>
				</g>
			</g>
		</g>
	</svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		value: {
			type: String,
			required: true,
		},
	},
});
</script>
