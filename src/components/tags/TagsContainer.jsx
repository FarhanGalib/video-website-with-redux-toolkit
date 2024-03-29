import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTags } from '../../features/tags/tagsSlice'
import Tag from './Tag'

const TagsContainer = () => {
	const { tags } = useSelector((state) => state.tags)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchTags())
	}, [dispatch])
	return (
		<section>
			<div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
			{tags.map((tag)=><Tag key={tag.id}>{tag.title}</Tag>)}
			</div>
		</section>
	)
}

export default TagsContainer
