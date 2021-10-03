<template>
	<div id="app">
		<router-view />
		<footer>
			<a
				href="https://github.com/Destiner/charter"
				target="_blank"
			>
				Source code
			</a>
		</footer>
	</div>
</template>

<style>
:root {
	--text-primary: #1f2937;
	--text-secondary: #4b5563;
	--bg-primary: #fff;
	--border-normal: #e5e7eb;
	--border-selected: #93c5fd;
	--border-focused: #3b82f6;
	--border-radius: 16px;
}

@media (prefers-color-scheme: dark) {
	:root {
		--text-primary: #F3F4F6;
		--text-secondary: #E5E7EB;
		--bg-primary: #1F2937;
		--border-normal: #1E3A8A;
		--border-selected: #2563EB;
		--border-focused: #60A5FA;
	}
}

body {
	margin: 0;
	background: var(--bg-primary);
	color: var(--text-primary);
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', Helvetica, Arial, sans-serif;
}

footer {
	margin: 16px;
}

a {
	color:  var(--text-secondary);
}
</style>
