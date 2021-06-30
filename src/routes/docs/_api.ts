import fs from 'fs';
import path from 'path';
import marked from 'marked';
import type { Request } from '@sveltejs/kit';
import type { Locals } from '$lib/types';
import { extract_frontmatter, extract_metadata } from '../../utils/markdown';
import { highlight } from '../../utils/highlight';

export interface MarkDownItemProps {
	html: string;
	metadata: Record<string, string>;
	subsections: { slug: string; title: string; level: string }[];
	slug: string;
	file: string;
}

export async function api(request: Request<Locals>, resource: string, data?: {}) {
	const res = await getMarkDown();
	return {
		status: 200,
		body: res
	};
}

const blockTypes = [
	'blockquote',
	'html',
	'heading',
	'hr',
	'list',
	'listitem',
	'paragraph',
	'table',
	'tablerow',
	'tablecell'
];

export const getMarkDown = (): MarkDownItemProps[] => {
	const root = process.cwd();
	const docPath = path.resolve(root, 'src', 'docs');
	return fs
		.readdirSync(docPath)
		.filter((file) => file[0] !== '.' && path.extname(file) === '.md')
		.map((file) => {
			const currentFilePath = path.resolve(docPath, file);
			const markdown = fs.readFileSync(currentFilePath, 'utf-8');
			const { content, metadata } = extract_frontmatter(markdown);
			const subsections = [];

			const renderer = new marked.Renderer();
			let block_open = false;

			renderer.hr = () => {
				block_open = true;

				return '<div class="side-by-side"><div class="copy">';
			};

			renderer.code = (source, lang) => {
				source = source.replace(/^ +/gm, (match) => match.split('    ').join('\t'));
				const lines = source.split('\n');

				const meta = extract_metadata(lines[0], lang);
				let prefix = '';
				let className = 'code-block';

				if (meta) {
					source = lines.slice(1).join('\n');
					const filename = meta.filename || (lang === 'html' && 'App.svelte');
					if (filename) {
						prefix = `<span class='filename'>${prefix} ${filename}</span>`;
						className += ' named';
					}
				}

				if (meta && meta.hidden) return '';

				const html = `<div class='${className}'>${prefix}${highlight(source, lang)}</div>`;

				if (block_open) {
					block_open = false;
					return `</div><div class="code">${html}</div></div>`;
				}

				return html;
			};

			renderer.heading = (text, level, rawtext) => {
				if (level === 1 || level === 2 || level === 3 || level === 4) {
					const title = text
						.replace(/<\/?code>/g, '')
						.replace(/\.(\w+)(\((.+)?\))?/, (m, $1, $2, $3) => {
							if ($3) return `.${$1}(...)`;
							if ($2) return `.${$1}()`;
							return `.${$1}`;
						});

					subsections.push({ slug: '', title, level });
				}

				return `
					<h${level}>
						<span   class="offset-anchor" ${level > 4 ? 'data-scrollignore' : ''}></span>
						<a  class="anchor" aria-hidden="true"></a>
						${text}
					</h${level}>`;
			};

			blockTypes.forEach((type) => {
				const fn = renderer[type];
				renderer[type] = function () {
					return fn.apply(this, arguments);
				};
			});

			const html = marked(content, { renderer });

			const hashes = {};
			const section_slug = '';
			return {
				html: html.replace(/@@(\d+)/g, (m, id) => hashes[id] || m),
				metadata,
				subsections,
				slug: section_slug,
				file
			};
		});
};
