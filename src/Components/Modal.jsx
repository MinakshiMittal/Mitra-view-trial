import { useVideo } from "../Context/video-context";

export const Modal = ({ video }) => {
  const {
    myPlaylists,
    dispatch,
    setEnteredPlaylist,
    enteredPlaylist
  } = useVideo();

  const createPlaylist = () => {
    setEnteredPlaylist("");
    dispatch({ type: "CREATE_A_NEW_PLAYLIST", payload: { enteredPlaylist } });
  };

  const checkHandler = (event, playlist) => {
    if (event.target.checked) {
      dispatch({
        type: "ADD_VIDEOS_TO_PLAYLIST",
        payload: { video, playlistName: playlist.name }
      });
    }
    if (!event.target.checked) {
      dispatch({
        type: "REMOVE_VIDEOS_FROM_PLAYLIST",
        payload: { video, playlistName: playlist.name }
      });
    }
  };
  console.log(myPlaylists);
  return (
    <>
      <h1>Playlists</h1>
      {myPlaylists.map((playlist) => {
        return (
          <>
            <input
              type="checkbox"
              onChange={(event) => checkHandler(event, playlist)}
            />
            <label>{playlist.name}</label>
          </>
        );
      })}
      <input
        type="text"
        onChange={(event) => setEnteredPlaylist(event.target.value)}
      />
      <button onClick={createPlaylist}>+</button>
    </>
  );
};
