/*
 * @Author: yehuozhili
 * @Date: 2021-06-30 16:57:15
 * @LastEditors: yehuozhili
 * @LastEditTime: 2021-07-06 11:17:08
 * @FilePath: \my-app\src\routes\docs\index.json.ts
 */
import { api } from './_api';

export const get = async () => {
	const response = await api();
	return response;
};
