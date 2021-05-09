import { useVideo } from "../Context/video-context";
import { VideoCard } from "../Components";

export const WatchLaterVideos = () => {
  const { videos } = useVideo();

  return (
    <>
      {videos.map((video) => {
        if (video.watchLater) {
          return <VideoCard video={video} noDetail />;
        }
        return null;
      })}
    </>
  );
};
