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
	export let sections: MarkDownItemProps[];
</script>

<svelte:head>
	<title>API Docs • Svelte</title>

	<meta name="twitter:title" content="Svelte API docs" />
	<meta name="twitter:description" content="Cybernetically enhanced web apps" />
	<meta name="Description" content="Cybernetically enhanced web apps" />
</svelte:head>

<div style="display: flex;">
	<div class="sidebar">
		{#each sections as section}
			<div class="title-item" style="cursor: pointer;">
				<div
					class="ahref"
					on:click={() => {
						location.href = `#${section.slug}`;
					}}
				>
					{@html section.metadata.title}
				</div>
			</div>
		{/each}
	</div>
	<div class="markdown-wrapper">
		{#each sections as section}
			<section data-id={section.slug}>
				<h1>
					<span class="offset-anchor" id={section.slug} />
					{@html section.metadata.title}
				</h1>

				{@html section.html}
			</section>
		{/each}
	</div>
</div>

<style lang="scss">
	.markdown-wrapper {
		height: calc(100vh - 40px);
		overflow: auto;
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
	}
	.sidebar {
		padding: 20px;
		overflow: auto;
		height: calc(100vh - 40px);
		border-right: 1px solid #eee;
		width: 300px;
		box-sizing: border-box;
		.ahref {
			text-decoration: none;
			color: #333;
			&:hover,
			&:visited,
			&:link,
			&:active {
				color: #333;
			}
		}
		.title-item {
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			margin: 10px 0;
		}
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
