<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { Button } from '@material-svelte/button';
	import logo from './svelte-logo.svg';
	const home = base + '/';
	const about = base + '/about';
	const docs = base + '/docs';
</script>

<header>
	<div class="corner">
		<img src={logo} alt="SvelteKit" />
	</div>

	<nav style="width: 100%;">
		<div class="nav-item-wrapper">
			<div class:active={$page.path === '/'}>
				<Button variant="text" href={home} backgroundColor="#4d5164">首页</Button>
			</div>
			<div class:active={$page.path === '/about'}>
				<Button variant="text" href={about} backgroundColor="#4d5164">图标</Button>
			</div>
			<div class:active={$page.path === '/docs'}>
				<Button variant="text" href={docs} backgroundColor="#4d5164">文档</Button>
			</div>
		</div>
	</nav>
</header>

<style lang="scss">
	$height: 40px;
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB,
			Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji,
			Segoe UI Emoji, Segoe UI Symbol;
		border-bottom: 1px solid #e2e2e2;
	}
	.corner {
		height: $height;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 20px;
		img {
			width: $height - 5px;
			height: $height - 5px;
		}
	}
	.nav-item-wrapper {
		height: $height;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		:nth-last-child(1) {
			margin-right: 20px;
		}
	}
</style>
