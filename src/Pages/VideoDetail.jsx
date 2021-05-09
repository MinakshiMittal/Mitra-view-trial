// import { videosData } from "../videosData";
import { useParams } from "react-router-dom";
import { VideoCard } from "../Components/index";
import { useVideo } from "../Context/video-context";

export const VideoDetail = () => {
  const { videos } = useVideo();
  console.log("Video Detail", videos);
  const { videoId } = useParams();
  const video = videos.find((video) => video.id === videoId);
  console.log("VideoDetail", video);
  return (
    <>
      <VideoCard video={video} />
    </>
  );
};
