import "./VideoCard.css";
import { Link } from "react-router-dom";
import { VideoPlay } from "../VideoPlay";

export const VideoCard = ({ video, noDetail }) => {
  return (
    <>
      {noDetail && (
        <Link to={`/video/${video.id}`}>
          <div className="card-demo">
            <div className="card-with-badge-demo">
              <div className="card-container">
                <img
                  className="video-image"
                  style={{
                    maxWidth: "250px",
                    height: "auto",
                    flexGrow: "1"
                  }}
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt=""
                />
                <p style={{ color: "#ffffff6e" }}>Mental Peace</p>
              </div>
            </div>
          </div>
        </Link>
      )}
      {!noDetail && <VideoPlay video={video} />}
    </>
  );
};
