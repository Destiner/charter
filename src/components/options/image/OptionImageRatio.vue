<template>
	<svg
		v-if="value === 'normal'"
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
					<g transform="translate(12.000000, 37.574468)">
						<rect
							fill="#BFDBFE"
							x="0"
							y="0.425531915"
							width="8"
							height="26"
						/>
						<rect
							fill="#93C5FD"
							x="8"
							y="11.4255319"
							width="8"
							height="15"
						/>
					</g>
					<g transform="translate(34.000000, 34.127660)">
						<rect
							fill="#BFDBFE"
							x="0"
							y="-0.127659574"
							width="8"
							height="30"
						/>
						<rect
							fill="#93C5FD"
							x="8"
							y="9.87234043"
							width="8"
							height="20"
						/>
					</g>
					<g transform="translate(56.000000, 37.574468)">
						<rect
							fill="#BFDBFE"
							x="0"
							y="1.42553191"
							width="8"
							height="25"
						/>
						<rect
							fill="#93C5FD"
							x="8"
							y="0.425531915"
							width="8"
							height="26"
						/>
					</g>
					<g transform="translate(78.000000, 26.085106)">
						<rect
							fill="#BFDBFE"
							x="0"
							y="17.9148936"
							width="8"
							height="20"
						/>
						<rect
							fill="#93C5FD"
							x="8"
							y="-0.085106383"
							width="8"
							height="38"
						/>
					</g>
					<g transform="translate(100.000000, 10.000000)">
						<rect
							fill="#BFDBFE"
							x="0"
							y="32"
							width="8"
							height="22"
						/>
						<rect
							fill="#93C5FD"
							x="8"
							y="0"
							width="8"
							height="54"
						/>
					</g>
				</g>
			</g>
		</g>
	</svg>
	<svg
		v-else-if="value === 'wide'"
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
						<g transform="translate(8.000000, 48.340426)">
							<rect
								fill="#BFDBFE"
								x="0"
								y="-0.340425532"
								width="8"
								height="16"
							/>
							<rect
								fill="#93C5FD"
								x="8"
								y="6.65957447"
								width="8"
								height="9"
							/>
						</g>
						<g transform="translate(32.000000, 46.297872)">
							<rect
								fill="#BFDBFE"
								x="0"
								y="-0.29787234"
								width="8"
								height="18"
							/>
							<rect
								fill="#93C5FD"
								x="8"
								y="5.70212766"
								width="8"
								height="12"
							/>
						</g>
						<g transform="translate(56.000000, 48.340426)">
							<rect
								fill="#BFDBFE"
								x="0"
								y="0.659574468"
								width="8"
								height="15"
							/>
							<rect
								fill="#93C5FD"
								x="8"
								y="-0.340425532"
								width="8"
								height="16"
							/>
						</g>
						<g transform="translate(80.000000, 41.531915)">
							<rect
								fill="#BFDBFE"
								x="0"
								y="10.4680851"
								width="8"
								height="12"
							/>
							<rect
								fill="#93C5FD"
								x="8"
								y="0.468085106"
								width="8"
								height="22"
							/>
						</g>
						<g transform="translate(104.000000, 32.000000)">
							<rect
								fill="#BFDBFE"
								x="0"
								y="19"
								width="8"
								height="13"
							/>
							<rect
								fill="#93C5FD"
								x="8"
								y="0"
								width="8"
								height="32"
							/>
						</g>
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
