import { getApi } from '../../utils/util'

export const getTags = async () => await getApi('/tags')
