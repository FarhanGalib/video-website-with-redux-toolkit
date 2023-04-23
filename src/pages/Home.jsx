import React from 'react'
import Pagination from '../components/pagination/Pagination'
import TagsContainer from '../components/tags/TagsContainer'
import VideoGrid from '../components/video-grid/VideoGrid'

const Home = () => {
	return (
		<>
			<TagsContainer />
			<VideoGrid />

			<Pagination />
		</>
	)
}

export default Home
