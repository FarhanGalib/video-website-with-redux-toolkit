import React from 'react'

const Tag = ({ children }) => {
	return (
		<div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
			{children}
		</div>
	)
}

export default Tag
