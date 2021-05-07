import { createContext, useContext, useReducer } from "react";
import { videosData } from "../videosData";
import { videoReducer } from "../Reducer/videoReducer";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, {
    videos: [...videosData],
    likedVideos: [],
    dislikedVideos: []
  });
  return (
    <VideoContext.Provider
      value={{
        videos: state.videos,
        likedVideos: state.likedVideos,
        dislikedVideos: state.dislikedVideos,
        dispatch
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  return useContext(VideoContext);
};
