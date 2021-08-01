<template>
	<svg
		v-if="value === 'forest'"
		viewBox="0 0 128 64"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<defs>
			<linearGradient
				id="gradient-forest"
				x1="0"
				y1="50%"
				x2="100%"
				y2="50%"
			>
				<stop
					stop-color="#F8FCF6"
					offset="0%"
				/>
				<stop
					stop-color="#194220"
					offset="100%"
				/>
			</linearGradient>
		</defs>
		<g
			stroke="none"
			stroke-width="1"
			fill="none"
			fill-rule="evenodd"
		>
			<g transform="translate(-2.000000, -2.000000)">
				<g transform="translate(2.000000, 2.000000)">
					<path d="M14,0 L114,0 C121.731986,-1.42034288e-15 128,6.2680135 128,14 L128,32 L128,32 L0,32 L0,14 C-9.46895252e-16,6.2680135 6.2680135,1.42034288e-15 14,0 Z" />
					<rect
						fill="url(#gradient-forest)"
						x="0"
						y="0"
						width="128"
						height="32"
						rx="14"
					/>
				</g>
			</g>
		</g>
	</svg>
	<svg
		v-else-if="value === 'ocean'"
		viewBox="0 0 128 64"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<defs>
			<linearGradient
				id="gradient-ocean"
				x1="-1.11022302e-14%"
				y1="50%"
				x2="100%"
				y2="50%"
			>
				<stop
					stop-color="#F8FBFF"
					offset="0%"
				/>
				<stop
					stop-color="#152F67"
					offset="100%"
				/>
			</linearGradient>
		</defs>
		<g
			stroke="none"
			stroke-width="1"
			fill="none"
			fill-rule="evenodd"
		>
			<g transform="translate(-2.000000, -2.000000)">
				<g transform="translate(2.000000, 2.000000)">
					<path d="M14,0 L114,0 C121.731986,-1.42034288e-15 128,6.2680135 128,14 L128,32 L128,32 L0,32 L0,14 C-9.46895252e-16,6.2680135 6.2680135,1.42034288e-15 14,0 Z" />
					<rect
						fill="url(#gradient-ocean)"
						x="0"
						y="0"
						width="128"
						height="32"
						rx="14"
					/>
				</g>
			</g>
		</g>
	</svg>
	<svg
		v-else-if="value === 'volcano'"
		viewBox="0 0 128 64"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<defs>
			<linearGradient
				id="gradient-volcano"
				x1="-1.11022302e-14%"
				y1="50%"
				x2="100%"
				y2="50%"
			>
				<stop
					stop-color="#FDF5EC"
					offset="0%"
				/>
				<stop
					stop-color="#752D13"
					offset="100%"
				/>
			</linearGradient>
		</defs>
		<g
			stroke="none"
			stroke-width="1"
			fill="none"
			fill-rule="evenodd"
		>
			<g transform="translate(-2.000000, -2.000000)">
				<g transform="translate(2.000000, 2.000000)">
					<path d="M14,0 L114,0 C121.731986,-1.42034288e-15 128,6.2680135 128,14 L128,32 L128,32 L0,32 L0,14 C-9.46895252e-16,6.2680135 6.2680135,1.42034288e-15 14,0 Z" />
					<rect
						fill="url(#gradient-volcano)"
						x="0"
						y="0"
						width="128"
						height="32"
						rx="14"
					/>
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
