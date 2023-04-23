import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import VideoDescription from '../components/video-discreption/VideoDescription'
import VideoPlayer from '../components/video-player/VideoPlayer'
import { fetchVideo } from '../features/video/videoSlice'

const Video = () => {
	const dispatch = useDispatch()
	const { id } = useParams()
	const { video } = useSelector((state) => state.video)

	useEffect(() => {
		dispatch(fetchVideo(id))
	}, [dispatch, id])

	return (
		<section className="pt-6 pb-20">
			<div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
				<div className="grid grid-cols-3 gap-2 lg:gap-8">
					<div className="col-span-full w-full space-y-8 lg:col-span-2">
						{/* video player  */}
						{video && Object.keys(video).length > 0 && (
							<VideoPlayer video={video} />
						)}
						
						{/* video description*/}
						<VideoDescription video={video} />
					</div>

					{/* <!-- related videos --> */}
					{/* <RelatedVideos id={video.id} tags={video.tags} /> */}
				</div>
			</div>
		</section>
	)
}

export default Video
