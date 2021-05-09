import { useVideo } from "../Context/video-context";
import { PlaylistIcon } from "./index";
export const VideoPlay = ({ video }) => {
  const { dispatch: videoDispatch } = useVideo();
  return (
    <div>
      <iframe
        style={{ width: "700px", height: "400px" }}
        title="Video"
        src={`https://www.youtube.com/embed/${video.id}?rel=0&enablejsapi=1`}
        allow="autoplay"
        allowFullScreen
      ></iframe>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center"
        }}
      >
        <p style={{ color: "white" }}>{video.views}</p>
        {!video.isLiked && (
          <i
            onClick={() => {
              if (video.isDisliked) {
                videoDispatch({
                  type: "REMOVE_FROM_DISLIKED_VIDEOS",
                  payload: video
                });
              }
              videoDispatch({ type: "LIKED_VIDEOS", payload: video });
            }}
            style={{ color: "white" }}
            className="far fa-thumbs-up"
          ></i>
        )}
        {video.isLiked && (
          <i
            onClick={() =>
              videoDispatch({
                type: "REMOVE_FROM_LIKED_VIDEOS",
                payload: video
              })
            }
            style={{ color: "white" }}
            className="fas fa-thumbs-up"
          ></i>
        )}
        {!video.isDisliked && (
          <i
            onClick={() => {
              if (video.isLiked) {
                videoDispatch({
                  type: "REMOVE_FROM_LIKED_VIDEOS",
                  payload: video
                });
              }
              videoDispatch({ type: "DISLIKED_VIDEOS", payload: video });
            }}
            style={{ color: "white" }}
            className="far fa-thumbs-down"
          ></i>
        )}
        {video.isDisliked && (
          <i
            onClick={() =>
              videoDispatch({
                type: "REMOVE_FROM_DISLIKED_VIDEOS",
                payload: video
              })
            }
            style={{ color: "white" }}
            className="fas fa-thumbs-down"
          ></i>
        )}
        {!video.watchLater && (
          <i
            onClick={() =>
              videoDispatch({
                type: "ADD_TO_WATCH_LATER",
                payload: video
              })
            }
            style={{
              color: "#c34d76",
              fontSize: "2rem",
              paddingLeft: "0",
              display: "block",
              paddingBottom: "2rem"
            }}
            className="far fa-clock"
          ></i>
        )}
        {video.watchLater && (
          <i
            onClick={() =>
              videoDispatch({
                type: "REMOVE_FROM_WATCH_LATER",
                payload: video
              })
            }
            style={{
              color: "#c34d76",
              fontSize: "2rem",
              paddingLeft: "0",
              display: "block",
              paddingBottom: "2rem"
            }}
            className="fas fa-clock"
          ></i>
        )}
        <PlaylistIcon />
      </div>
    </div>
  );
};
