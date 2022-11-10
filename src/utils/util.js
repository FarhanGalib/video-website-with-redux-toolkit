import axios from 'axios'
import { API_URL } from '../constants/AppConstants'

export const redirectTo = (url) => {
	window.location.replace(url)
}
export function callApi(endpoint, config) {
	return axios({
		url: `${API_URL}/api${endpoint}`,
		withCredentials: true,
		...config,
	})
}

export async function getApi(endpoint, config) {
	const response = await callApi(endpoint, { method: 'GET', ...config })
	return response.data
}

export async function postApi(endpoint, data, config) {
	const response = await callApi(endpoint, { method: 'POST', data, ...config })
	return response.data
}

export async function putApi(endpoint, data, config) {
	const response = await callApi(endpoint, { method: 'PUT', data, ...config })
	return response.data
}

export async function patchApi(endpoint, data, config) {
	const response = await callApi(endpoint, {
		method: 'PATCH',
		data,
		...config,
	})

	return response.data
}

export async function deleteApi(endpoint, data = {}, config) {
	const response = await callApi(endpoint, {
		method: 'DELETE',
		data,
		...config,
	})

	return response.data
}

export class PaginationListParameters {
	pageNumber = 1
	perPage = 10
	searchTerm
}

export const toCapitalize = (word) => {
	const lower = word.toLowerCase()
	return word.charAt(0).toUpperCase() + lower.slice(1)
}

export const truncateWithEllipses = (text, max) => {
	return text.substring(0, max - 1) + (text.length > max ? '...' : '')
}

// export const queryParamsToObject = (qParams => {
//   return JSON.parse(
//     '{"' +
//       decodeURI(qParams)
//         .replace(/"/g, '\\"')
//         .replace(/&/g, '","')
//         .replace(/=/g, '":"') +
//       '"}',
//   )
// }

export const isEmptyObjet = (obj) => {
	return Object.keys(obj).length === 0 && obj.constructor === Object
}
