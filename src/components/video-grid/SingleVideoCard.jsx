import React from 'react'
import { Link } from 'react-router-dom'

const SingleVideoCard = ({ data }) => {
	return (
		<div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
			<div className="w-full flex flex-col">
				<div className="relative">
					<Link to={`/video/${data.id}`}>
						<img
							src={data.thumbnail}
							className="w-full h-auto"
							alt={data.title}
						/>
					</Link>

					<p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
						{data.duration}
					</p>
				</div>

				<div className="flex flex-row mt-2 gap-2">
					<Link to={`/video/${data.id}`} className="shrink-0">
						<img
							src={data.avatar}
							className="rounded-full h-6 w-6"
							alt={data.title}
						/>
					</Link>

					<div className="flex flex-col">
						<Link to={`/video/${data.id}`}>
							<p className="text-slate-900 text-sm font-semibold">
								{data.title}
							</p>
						</Link>
						<Link
							className="text-gray-400 text-xs mt-2 hover:text-gray-600"
							to="/video/1"
						>
							{data.author}
						</Link>
						<p className="text-gray-400 text-xs mt-1">
							{data.views} views . {data.date}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SingleVideoCard
