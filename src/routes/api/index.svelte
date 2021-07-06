<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { MarkDownItemProps } from '../docs/_api';
	import { base } from '$app/paths';
	export const load: Load = async ({ fetch }) => {
		const path = `${base}/docs.json?name=api`;
		const res = await fetch(path);
		if (res.ok) {
			const files = await res.json();
			const map = new Map<string, MarkDownItemProps[]>();
			files.forEach((v) => {
				const stitle = v.sTitle || 'default';
				const value = map.get(stitle);
				if (value) {
					value.push(v);
				} else {
					map.set(stitle, [v]);
				}
			});

			return {
				props: { sections: map }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<script lang="ts">
	import DocRender from '$lib/DocRender/index.svelte';
	export let sections: Map<string, MarkDownItemProps[]>;
	let active = '';
</script>

<svelte:head>
	<title>API Docs • Svelte</title>
	<meta name="twitter:title" content="Svelte API docs" />
	<meta name="twitter:description" content="Cybernetically enhanced web apps" />
	<meta name="Description" content="Cybernetically enhanced web apps" />
</svelte:head>

<DocRender {active} {sections} />

<style lang="scss">
</style>
