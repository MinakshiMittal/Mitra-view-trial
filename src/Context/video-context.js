import { createContext, useContext, useReducer, useState } from "react";
import { videosData } from "../videosData";
import { videoReducer } from "../Reducer/videoReducer";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, {
    videos: [...videosData],
    // likedVideos: [],
    // dislikedVideos: [],
    myPlaylists: []
  });
  const [enteredPlaylist, setEnteredPlaylist] = useState(null);
  return (
    <VideoContext.Provider
      value={{
        videos: state.videos,
        // likedVideos: state.likedVideos,
        // dislikedVideos: state.dislikedVideos,
        myPlaylists: state.myPlaylists,
        dispatch,
        enteredPlaylist,
        setEnteredPlaylist
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  return useContext(VideoContext);
};
