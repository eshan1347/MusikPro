import React, { useEffect, useState } from "react";
// import SongDetails from "./SongDetails";
import { getGenAT } from "../apiSpotify/getSpotifyAT";
import getTrack from "../apiSpotify/getTrack";
import { useNavigate } from "react-router-dom";
import getSearchTrack from "../apiSpotify/getSearchTrack";
// import SongPage from "../Routes/SongPage";
// import { Link } from "react-router-dom";

const SpotifyUpload = () => {
  const [song, setSong] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [songDet, setSongDet] = useState(null);
  // const [trackID, setTrackID] = useState(null);
  const [spotUrl, setSpotUrl] = useState("");
  const [spotPLUrl, setSpotPLUrl] = useState("");
  const history = useNavigate();

  // const SongPage = () => {
  //   return (
  //     <div>
  //       <h1>SOng INformation</h1>
  //       <h1>{songDet.name}</h1>
  //       <h2>{songDet.artists[0]}</h2>
  //       <h2>{songDet.album}</h2>
  //     </div>
  //   );
  // };

  const handleSongLinkSubmit = async (e) => {
    e.preventDefault();
    const trackID = spotUrl.split("/").pop().split("?")[0];
    console.log("TrackID " + trackID);
    history(`/songs/${trackID}`);
  };

  const LinkOP = () => {
    const [showEle, setShowEle] = useState(false);
    return (
      <div>
        <form onSubmit={handleSongLinkSubmit}>
          <input
            type="text"
            value={spotUrl}
            onChange={(e) => setSpotUrl(e.target.value)}
          ></input>
          <button type="submit" onClick={handleSongLinkSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  };
  const handlePlayListSubmit = async (e) => {
    e.preventDefault();
    const playListID = spotPLUrl.split("/").pop().split("?")[0];
    console.log("PlayList " + playListID);
    history(`/playlist/${playListID}`);
  };

  const PlayListOP = () => {
    const [showEle, setShowEle] = useState(false);
    return (
      <div>
        <form onSubmit={handlePlayListSubmit}>
          <input
            type="text"
            value={spotPLUrl}
            onChange={(e) => setSpotPLUrl(e.target.value)}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  const handleSongTitleSubmit = async (e) => {
    e.preventDefault();
    const at = await getGenAT(
      "db50576864454fc19a8c2410b1323464",
      "811f528fbccb447991f8b5816dd5146b"
    );
    const url = await getSearchTrack(title, artist, at);
    console.log("URl + " + url.tracks.items[0].id);
    const trackID = url.tracks.items[0].id.split("/").pop().split("?")[0];
    console.log("TrackID " + trackID);
    history(`/songs/${trackID}`);
  };
  const TitleOP = () => {
    return (
      <div>
        <form onSubmit={handleSongTitleSubmit}>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label>Artist</label>
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };

  const handleIPEle = (song) => {
    switch (song) {
      case "title":
        return <TitleOP />;
      case "link":
        return <LinkOP />;
      case "playlist":
        return <PlayListOP />;
      case "null":
        return <h3>Choose Input Type</h3>;
    }
  };

  return (
    <div>
      <h1>SpotifyUpload</h1>
      <div>
        <label>Upload Spotify song url</label>
        <br></br>
        <br></br>
        <select
          value={song}
          onChange={(e) => setSong(e.target.value)}
          style={{ marginBottom: 15 }}
        >
          <option value="null">select</option>
          <option value="title">Title</option>
          <option value="link">Link</option>
          <option value="playlist">PlayList</option>
        </select>
        {handleIPEle(song)}
      </div>
    </div>
  );
};

export default SpotifyUpload;
