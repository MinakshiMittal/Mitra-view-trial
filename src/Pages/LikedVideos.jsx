import { useVideo } from "../Context/video-context";
import { VideoCard } from "../Components";

export const LikedVideos = () => {
  const { videos } = useVideo();
  return (
    <>
      {videos.map((video) => {
        if (video.isLiked) {
          return <VideoCard video={video} noDetail />;
        }
        return null;
      })}
    </>
  );
};
