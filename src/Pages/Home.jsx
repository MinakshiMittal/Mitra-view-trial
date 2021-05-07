import { videosData } from "../videosData";
import { VideoCard } from "../Components/index";

export const Home = () => {
  return (
    <>
      {videosData.map((video) => {
        return <VideoCard video={video} noDetail />;
      })}
    </>
  );
};
