import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import relatedVideosReducer from '../features/related-videos/relatedVideosSlice'
import tagsReducer from '../features/tags/tagsSlice'
import videosReducer from '../features/videos/videosSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		videos: videosReducer,
		tags: tagsReducer,
		video: videosReducer,
		relatedVideos: relatedVideosReducer,
	},
})
