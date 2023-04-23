import { getApi } from '../../utils/util'

export const getVideos = async () => await getApi('/videos')
