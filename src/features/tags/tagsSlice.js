import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getTags } from './tagsAPI'

const initialState = {
	isLoading: false,
	isError: false,
	tags: [],
	errorMessage: '',
}

export const fetchTags = createAsyncThunk(
	'tags/fetchTags',
	async () => await getTags()
)

export const tagsSlice = createSlice({
	name: 'tags',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchTags.pending, (state) => {
				state.isLoading = true
				state.isError = false
				state.errorMessage = ''
			})
			.addCase(fetchTags.fulfilled, (state, action) => {
				state.isLoading = false
				state.tags = action.payload
			})
			.addCase(fetchTags.rejected, (state, action) => {
				state.tags = []
				state.isError = false
				state.errorMessage = action.error?.message
			})
	},
})

export default tagsSlice.reducer
