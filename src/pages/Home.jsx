import React from 'react'
import Tag from '../components/tags/Tag'
import TagsContainer from '../components/tags/TagsContainer'
import VideoGrid from '../components/video-grid/VideoGrid'
import Pagination from '../components/pagination/Pagination';

const Home = () => {
	return (
		<>
			<TagsContainer>
				<Tag>React</Tag>
			</TagsContainer>

			<VideoGrid />

            <Pagination/>
		</>
	)
}

export default Home
