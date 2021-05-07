import { videosData } from "../videosData";
import { useParams } from "react-router-dom";
import { VideoCard } from "../Components/index";

export const VideoDetail = () => {
  const { videoId } = useParams();
  const video = videosData.find((video) => video.id === videoId);
  console.log(video);
  return (
    <>
      <VideoCard video={video} />
    </>
  );
};
