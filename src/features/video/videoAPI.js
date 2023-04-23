import { getApi } from '../../utils/util'

export const getVideo = async (id) => await getApi(`/videos/${id}`)
