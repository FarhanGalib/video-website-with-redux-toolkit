import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getVideo } from './videoAPI'

const initialState = {
	isLoading: false,
	video: {},
	isError: false,
	errorMessage: '',
}

export const fetchVideo = createAsyncThunk(
	'video/fetchVideo',
	async (id) => await getVideo(id)
)

export const videoSlice = createSlice({
	name: 'videos',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchVideo.pending, (state) => {
				state.isLoading = true
				state.isError = false
				state.errorMessage = ''
			})
			.addCase(fetchVideo.fulfilled, (state, action) => {
				state.isLoading = false
				state.video = action.payload
			})
			.addCase(fetchVideo.rejected, (state, action) => {
				state.isLoading = false
				state.video = {}
				state.isError = true
				state.errorMessage = action.error?.message
			})
	},
})
export default videoSlice.reducer
