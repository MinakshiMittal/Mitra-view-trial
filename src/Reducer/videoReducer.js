export const videoReducer = (state, action) => {
  switch (action.type) {
    case "LIKED_VIDEOS":
      return {
        ...state,
        videos: state.videos.map((video) => {
          if (video.id === action.payload.id) {
            return { ...video, isLiked: true };
          }
          return video;
        }),
        likedVideos: [
          ...state.likedVideos,
          ...state.videos
            .filter((video) => video.id === action.payload.id)
            .map((video) => ({ ...video, isLiked: true }))
        ]
      };

    case "REMOVE_FROM_LIKED_VIDEOS":
      return {
        ...state,
        videos: state.videos.map((video) => {
          if (video.id === action.payload.id) {
            return { ...video, isLiked: false };
          }
          return video;
        }),
        likedVideos: state.likedVideos.filter(
          (video) => video.id !== action.payload.id
        )
      };

    case "DISLIKED_VIDEOS":
      return {
        ...state,
        videos: state.videos.map((video) => {
          if (video.id === action.payload.id) {
            return { ...video, isDisliked: true };
          }
          return video;
        }),
        dislikedVideos: [
          ...state.dislikedVideos,
          ...state.videos
            .filter((video) => video.id === action.payload.id)
            .map((video) => ({ ...video, isDisliked: true }))
        ]
      };

    case "REMOVE_FROM_DISLIKED_VIDEOS":
      return {
        ...state,
        videos: state.videos.map((video) => {
          if (video.id === action.payload.id) {
            return { ...video, isDisliked: false };
          }
          return video;
        }),
        dislikedVideos: state.dislikedVideos.filter(
          (video) => video.id !== action.payload.id
        )
      };

    default:
      return state;
  }
};
