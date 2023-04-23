import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getRelatedVideos } from './relatedVideosAPI'

const initialState = {
	isLoading: false,
	isError: false,
	relatedVideos: [],
	errorMessage: '',
}
export const fetchRelatedVideos = createAsyncThunk(
	'relatedVideos/fetchRelatedVideos',
	async (queryString) => await getRelatedVideos(queryString)
)
export const relatedVideosSlice = createSlice({
	name: 'relatedVideos',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(
				fetchRelatedVideos.pending((state) => {
					state.isLoading = true
					state.isError = false
					state.errorMessage = true
					state.relatedVideos = []
				})
			)
			.addCase(
				fetchRelatedVideos.fulfilled((state, action) => {
					state.isLoading = false
					state.relatedVideos = action.payload
				})
			)
			.addCase(
				fetchRelatedVideos.rejected((state, action) => {
					state.relatedVideos = []
					state.isError = true
					state.errorMessage = action?.error?.message
				})
			)
	},
})

export default relatedVideosSlice.reducer
