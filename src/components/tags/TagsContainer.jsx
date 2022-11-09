import React from 'react'
import Tag from './Tag'

const TagsContainer = ({ children }) => {
	return (
		<section>
			<div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
				{children}
			</div>
		</section>
	)
}

export default TagsContainer
