import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getVideos } from './videosAPI'

const initialState = {
	isLoading: false,
	videos: [],
	isError: false,
	errorMessage: '',
}

export const fetchVideos = createAsyncThunk(
	'videos/fetchVideos',
	async () => await getVideos('/videos')
)
export const videosSlice = createSlice({
	name: 'videos',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchVideos.pending, (state) => {
				state.isLoading = true
				state.isError = false
				state.errorMessage = ''
			})
			.addCase(fetchVideos.fulfilled, (state, action) => {
				state.isLoading = false
				state.videos = action.payload
			})
			.addCase(fetchVideos.rejected, (state, action) => {
				state.isLoading = false
				state.videos = []
				state.isError = true
				state.errorMessage = action.error?.message
			})
	},
})
export default videosSlice.reducer
