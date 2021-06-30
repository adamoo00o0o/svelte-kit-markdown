/*
 * @Author: yehuozhili
 * @Date: 2021-06-30 16:57:15
 * @LastEditors: yehuozhili
 * @LastEditTime: 2021-06-30 19:50:04
 * @FilePath: \my-app\src\routes\docs\index.json.ts
 */
import { api } from './_api';

export const get = async (request) => {
	const response = await api(request, `docs/${request.locals.userid}`);
	return response;
};
