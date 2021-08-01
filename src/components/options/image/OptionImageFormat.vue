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
					<path d="M14,0 L114,0 C121.731986,-1.42034288e-15 128,6.2680135 128,14 L128,64 L128,64 L0,64 L0,14 C-9.46895252e-16,6.2680135 6.2680135,1.42034288e-15 14,0 Z" />
					<text
						font-size="16"
						font-weight="400"
						fill="#93C5FD"
					>
						<tspan
							x="54"
							y="42"
						>
							42
						</tspan>
					</text>
					<text
						font-size="12"
						font-weight="400"
						fill="#BFDBFE"
					>
						<tspan
							x="98"
							y="47"
						>
							18
						</tspan>
					</text>
					<text
						font-size="12"
						font-weight="400"
						fill="#BFDBFE"
					>
						<tspan
							x="9"
							y="52"
						>
							1984
						</tspan>
					</text>
					<text
						font-size="12"
						font-weight="400"
						fill="#BFDBFE"
					>
						<tspan
							x="91"
							y="20"
						>
							5
						</tspan>
					</text>
					<text
						font-size="12"
						font-weight="400"
						fill="#BFDBFE"
					>
						<tspan
							x="19"
							y="27"
						>
							123
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
						<path d="M14,0 L114,0 C121.731986,-1.42034288e-15 128,6.2680135 128,14 L128,64 L128,64 L0,64 L0,14 C-9.46895252e-16,6.2680135 6.2680135,1.42034288e-15 14,0 Z" />
						<text
							id="$" 
							ont-size="16"
							font-weight="400"
							fill="#93C5FD"
						>
							<tspan
								x="59"
								y="42"
							>
								$
							</tspan>
						</text>
						<text
							id="€"
							font-size="14"
							font-weight="400"
							fill="#BFDBFE"
						>
							<tspan
								x="20"
								y="25"
							>
								€
							</tspan>
						</text>
						<text
							id="¥"
							font-size="14"
							font-weight="400"
							fill="#BFDBFE"
						>
							<tspan
								x="92"
								y="23"
							>
								¥
							</tspan>
						</text>
						<text
							id="₿"
							font-size="14"
							font-weight="normal"
							fill="#BFDBFE"
						>
							<tspan
								x="83"
								y="50"
							>
								₿
							</tspan>
						</text>
						<text
							id="₽"
							font-size="14"
							font-weight="400"
							fill="#BFDBFE"
						>
							<tspan
								x="29"
								y="54"
							>
								₽
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
						<path d="M14,0 L114,0 C121.731986,-1.42034288e-15 128,6.2680135 128,14 L128,64 L128,64 L0,64 L0,14 C-9.46895252e-16,6.2680135 6.2680135,1.42034288e-15 14,0 Z" />
						<text
							font-size="16"
							font-weight="400"
							fill="#93C5FD"
						>
							<tspan
								x="44"
								y="42"
							>
								100%
							</tspan>
						</text>
						<text
							font-size="12"
							font-weight="400"
							fill="#BFDBFE"
						>
							<tspan
								x="100"
								y="51"
							>
								1%
							</tspan>
						</text>
						<text
							font-size="12"
							font-weight="400"
							fill="#BFDBFE"
						>
							<tspan
								x="11"
								y="55"
							>
								225%
							</tspan>
						</text>
						<text
							font-size="12"
							font-weight="400"
							fill="#BFDBFE"
						>
							<tspan
								x="92"
								y="22"
							>
								59%
							</tspan>
						</text>
						<text
							font-size="12"
							font-weight="400"
							fill="#BFDBFE"
						>
							<tspan
								x="18"
								y="25"
							>
								33%
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
