export const videoReducer = (state, action) => {
  console.log("myplaylist", state.myPlaylists);
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
        // likedVideos: [
        //   ...state.likedVideos,
        //   ...state.videos
        //     .filter((video) => video.id === action.payload.id)
        //     .map((video) => ({ ...video, isLiked: true }))
        // ],
        myPlaylists: state.myPlaylists.map((playlist) => {
          return {
            ...playlist,
            videosInPlaylist: playlist.videosInPlaylist.map((video) => {
              if (video.id === action.payload.id) {
                return { ...video, isLiked: true };
              }
              return video;
            })
          };
        })
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
        // likedVideos: state.likedVideos.filter(
        //   (video) => video.id !== action.payload.id
        // ),
        myPlaylists: state.myPlaylists.map((playlist) => {
          return {
            ...playlist,
            videosInPlaylist: playlist.videosInPlaylist.map((video) => {
              if (video.id === action.payload.id) {
                return { ...video, isLiked: false };
              }
              return video;
            })
          };
        })
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
        // dislikedVideos: [
        //   ...state.dislikedVideos,
        //   ...state.videos
        //     .filter((video) => video.id === action.payload.id)
        //     .map((video) => ({ ...video, isDisliked: true }))
        // ],
        myPlaylists: state.myPlaylists.map((playlist) => {
          return {
            ...playlist,
            videosInPlaylist: playlist.videosInPlaylist.map((video) => {
              if (video.id === action.payload.id) {
                return { ...video, isDisliked: true };
              }
              return video;
            })
          };
        })
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
        // dislikedVideos: state.dislikedVideos.filter(
        //   (video) => video.id !== action.payload.id
        // ),
        myPlaylists: state.myPlaylists.map((playlist) => {
          return {
            ...playlist,
            videosInPlaylist: playlist.videosInPlaylist.map((video) => {
              if (video.id === action.payload.id) {
                return { ...video, isDisliked: false };
              }
              return video;
            })
          };
        })
      };

    case "ADD_TO_WATCH_LATER":
      return {
        ...state,
        videos: state.videos.map((video) => {
          if (video.id === action.payload.id) {
            return { ...video, watchLater: true };
          }
          return video;
        }),
        myPlaylists: state.myPlaylists.map((playlist) => {
          return {
            ...playlist,
            videosInPlaylist: playlist.videosInPlaylist.map((video) => {
              if (video.id === action.payload.id) {
                return { ...video, watchLater: true };
              }
              return video;
            })
          };
        })
      };

    case "REMOVE_FROM_WATCH_LATER":
      return {
        ...state,
        videos: state.videos.map((video) => {
          if (video.id === action.payload.id) {
            return { ...video, watchLater: false };
          }
          return video;
        }),
        myPlaylists: state.myPlaylists.map((playlist) => {
          return {
            ...playlist,
            videosInPlaylist: playlist.videosInPlaylist.map((video) => {
              if (video.id === action.payload.id) {
                return { ...video, watchLater: false };
              }
              return video;
            })
          };
        })
      };

    case "CREATE_A_NEW_PLAYLIST":
      return {
        ...state,
        myPlaylists: [
          ...state.myPlaylists,
          {
            name: action.payload.enteredPlaylist,
            videosInPlaylist: []
          }
        ]
      };

    case "ADD_VIDEOS_TO_PLAYLIST":
      return {
        ...state,
        myPlaylists: state.myPlaylists.map((playlist) => {
          if (playlist.name === action.payload.playlistName) {
            return {
              ...playlist,
              videosInPlaylist: [
                ...playlist.videosInPlaylist,
                action.payload.video
              ]
            };
          }
          return playlist;
        })
      };

    case "REMOVE_VIDEOS_FROM_PLAYLIST":
      return {
        ...state,
        myPlaylists: state.myPlaylists.map((playlist) => {
          if (playlist.name === action.payload.playlistName) {
            return {
              ...playlist,
              videosInPlaylist: playlist.videosInPlaylist.filter(
                (videoToBeRemoved) =>
                  videoToBeRemoved.id !== action.payload.video.id
              )
            };
          }
          return playlist;
        })
      };

    default:
      return state;
  }
};
