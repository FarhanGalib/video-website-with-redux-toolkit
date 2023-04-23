import { getApi } from '../../utils/util'

export const getRelatedVideos = async (queryString) =>
	await getApi(`/videos/${queryString}`)
