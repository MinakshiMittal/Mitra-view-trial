import "./styles.css";
import { MainMenu, SideNav } from "./Components";
import { Routes, Route } from "react-router-dom";
import { Home, VideoDetail, LikedVideos, DislikedVideos } from "./Pages";

export default function App() {
  return (
    <div className="App">
      <header className="page-main-menu">
        <MainMenu />
      </header>
      <div
        className="component-list"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center"
        }}
      >
        <SideNav />
      </div>

      <div className="component-display" style={{}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:videoId" element={<VideoDetail />} />
          <Route path="/liked-videos" element={<LikedVideos />} />
          <Route path="/disliked-videos" element={<DislikedVideos />} />
          {/* <Route path="/watch-later-videos" element={<WatchLaterVideos />} />
          <Route path="playlist" element={<PlaylistPage />} /> */}
        </Routes>
      </div>
    </div>
  );
}
