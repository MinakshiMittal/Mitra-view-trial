import { PlaylistIcon } from "./index";
export const VideoPlay = ({ video }) => {
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
          <i style={{ color: "white" }} className="far fa-thumbs-up"></i>
        )}
        {video.isLiked && (
          <i style={{ color: "white" }} className="fas fa-thumbs-up"></i>
        )}
        {!video.isDisliked && (
          <i style={{ color: "white" }} className="far fa-thumbs-down"></i>
        )}
        {video.isDisliked && (
          <i style={{ color: "white" }} className="fas fa-thumbs-down"></i>
        )}
        <PlaylistIcon />
      </div>
    </div>
  );
};
