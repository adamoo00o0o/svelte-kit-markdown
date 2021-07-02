/*
 * @Author: yehuozhili
 * @Date: 2021-06-29 11:14:15
 * @LastEditors: yehuozhili
 * @LastEditTime: 2021-07-02 15:38:18
 * @FilePath: \my-app\svelte.config.js
 */
import preprocess from 'svelte-preprocess';
import staticAdapter from '@sveltejs/adapter-static';
import materialPostcss from '@material-svelte/postcss-plugin';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: {
			plugins: [materialPostcss()]
		}
	}),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: staticAdapter({
			pages: 'build',
			assets: 'build'
		}),
		paths: process.env.DEPLOY
			? {
					base: '/svelte-kit-markdown'
			  }
			: {},
		trailingSlash: 'ignore'
	}
};

export default config;
