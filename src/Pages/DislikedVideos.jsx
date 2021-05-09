import { VideoCard } from "../Components";
import { useVideo } from "../Context/video-context";

export const DislikedVideos = () => {
  const { videos } = useVideo();
  return (
    <>
      {videos.map((video) => {
        if (video.isDisliked) {
          return <VideoCard video={video} noDetail />;
        }
        return null;
      })}
    </>
  );
};
