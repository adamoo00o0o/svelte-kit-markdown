<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { MarkDownItemProps } from './_api';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/docs.json');
		if (res.ok) {
			const sections: MarkDownItemProps[] = await res.json();
			return {
				props: { sections }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<script lang="ts">
	export let sections: MarkDownItemProps[];
</script>

<svelte:head>
	<title>API Docs • Svelte</title>

	<meta name="twitter:title" content="Svelte API docs" />
	<meta name="twitter:description" content="Cybernetically enhanced web apps" />
	<meta name="Description" content="Cybernetically enhanced web apps" />
</svelte:head>

<h1 class="visually-hidden">API Docs</h1>
<div>
	{#each sections as section}
		<section data-id={section.slug}>
			<h2>
				<span class="offset-anchor" id={section.slug} />
				{@html section.metadata.title}
				<small>
					<div>xxxx</div>
				</small>
			</h2>

			{@html section.html}
		</section>
	{/each}
</div>
