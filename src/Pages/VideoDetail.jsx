import { useParams } from "react-router-dom";
import { VideoCard } from "../Components/index";
import { useVideo } from "../Context/video-context";

export const VideoDetail = () => {
  const { videos } = useVideo();
  const { videoId } = useParams();
  const video = videos.find((video) => video.id === videoId);

  return (
    <>
      <VideoCard video={video} />
    </>
  );
};
