<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { MarkDownItemProps } from './_api';
	import { base } from '$app/paths';
	export const load: Load = async ({ fetch }) => {
		const path = `${base}/docs.json`;
		const res = await fetch(path);
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
	import './prism.css';
	import Icon from '$lib/Icon/index.svelte';
	import Icons from '$lib/Icons/index.svelte';
	export let sections: MarkDownItemProps[];
	let aside;
	let show_contents = false;
</script>

<svelte:head>
	<title>API Docs • Svelte</title>

	<meta name="twitter:title" content="Svelte API docs" />
	<meta name="twitter:description" content="Cybernetically enhanced web apps" />
	<meta name="Description" content="Cybernetically enhanced web apps" />
</svelte:head>

<Icons />

<div>
	<div>
		{#each sections as section}
			<section data-id={section.slug}>
				<h1>
					<span class="offset-anchor" id={section.slug} />
					{@html section.metadata.title}
					<small>
						{section.file}
					</small>
				</h1>

				{@html section.html}
			</section>
		{/each}
	</div>
</div>

<aside bind:this={aside} class="sidebar-container" class:open={show_contents}>
	<div class="sidebar">
		{#if show_contents}
			<div on:click={() => (show_contents = !show_contents)}>
				<Icon name="arrow-left" />
			</div>
			{#each sections as section}
				<div style="cursor: pointer;">
					<a href={`docs#${section.slug}`}>
						{@html section.metadata.title}
					</a>
				</div>
			{/each}
		{:else}
			<div on:click={() => (show_contents = !show_contents)}>
				<Icon name="arrow-right" />
			</div>
		{/if}
	</div>
</aside>

<style>
	aside {
		position: fixed;
		background-color: white;
		padding-right: 5px;
		left: 10px;
		top: 10%;
		width: 21px;
		height: 21px;
		overflow: hidden;
		overflow: auto;
		border: 1px solid #eee;
		box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
		transition: width 0.2s, height 0.2s;
	}

	aside.open {
		width: 200px;
		height: 80%;
		overflow: auto;
	}

	section :global(blockquote) {
		color: hsl(204, 100%, 50%);
		border: 2px solid var(--flash);
	}
	section :global(blockquote) :global(code) {
		background: hsl(204, 100%, 95%) !important;
		color: hsl(204, 100%, 50%);
	}

	::-webkit-scrollbar {
		width: 5px; /*对垂直流动条有效*/
		height: 5px; /*对水平流动条有效*/
	}

	/*定义滚动条的轨道颜色、内阴影及圆角*/
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
		background-color: #eee;
		border-radius: 3px;
	}

	/*定义滑块颜色、内阴影及圆角*/
	::-webkit-scrollbar-thumb {
		border-radius: 7px;
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		background-color: #444444;
	}

	/*定义两端按钮的样式*/
	::-webkit-scrollbar-button {
		background-color: #b9c6d2;
	}

	/*定义右下角汇合处的样式*/
	::-webkit-scrollbar-corner {
		background: #b9c6d2;
	}
</style>
