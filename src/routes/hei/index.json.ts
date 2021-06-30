/*
 * @Author: yehuozhili
 * @Date: 2021-06-29 13:53:35
 * @LastEditors: yehuozhili
 * @LastEditTime: 2021-06-30 14:00:26
 * @FilePath: \my-app\src\routes\hei\index.json.ts
 */
import { api } from './_api';
import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';

export const get: RequestHandler<Locals> = async (request) => {
	//const response = await api(request, `hei/${request.locals.userid}`);

	return { body: [{ 123: 213124, 213: 21 }] };
};

export const post: RequestHandler<Locals, FormData> = async (request) => {
	const response = await api(request, `hei/${request.locals.userid}`, {
		text: request.body.get('text')
	});
	return response;
};
