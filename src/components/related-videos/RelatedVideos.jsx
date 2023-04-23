import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchRelatedVideos } from '../../features/related-videos/relatedVideosSlice'

const RelatedVideos = ({ id, tags }) => {
	const { relatedVideos } = useSelector((state) => state.videos)
	const dispatch = useDispatch()
	useEffect(() => {
		let queryString
		if (!(tags && tags.length > 0)) return
		queryString =
			tags.map((tag) => '?tags_like=' + tag).join('&&') + `id_ne=${id}`
		console.log(queryString)
		fetchRelatedVideos(queryString)
	}, [dispatch, tags, id])
	return (
		<div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
			{/* <!-- single related video --> */}
			{relatedVideos.length > 0 && relatedVideos.map((video)=>
				<div className="w-full flex flex-row gap-2 mb-4">
					<div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
						<Link to={`/videos/${video.id}`}>
							<img
								src=''
								className="object-cover"
								alt="Some video title"
							/>
						</Link>
						<p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
							12:10
						</p>
					</div>

					<div className="flex flex-col w-full">
						<Link to="/video/1">
							<p className="text-slate-900 text-sm font-semibold">
								Some video title
							</p>
						</Link>
						<Link
							to="/video/1"
							className="text-gray-400 text-xs mt-2 hover:text-gray-600"
							href="#"
						>
							Learn with Sumit
						</Link>
						<p className="text-gray-400 text-xs mt-1">
							100K views . 23 Oct 2022
						</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default RelatedVideos
