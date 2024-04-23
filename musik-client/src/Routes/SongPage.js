import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getGenAT } from "../apiSpotify/getSpotifyAT";
import getTrack from "../apiSpotify/getTrack";
import addSong from "../api/addSong";

const SongPage = () => {
  const { trackID } = useParams();
  const [songDet, setSongDet] = useState({});
  const [loading, setLoading] = useState(true);

  const handleAddSongDb = async () => {
    await addSong(
      songDet.name,
      songDet.external_urls.spotify,
      null,
      null,
      null,
      songDet.artists[0].name,
      songDet.artists[0].external_urls.spotify,
      songDet.album.name,
      songDet.album.external_urls.spotify,
      songDet.popularity
    );
  };

  useEffect(() => {
    const fetchSongPage = async () => {
      try {
        const at = await getGenAT(
          "db50576864454fc19a8c2410b1323464",
          "811f528fbccb447991f8b5816dd5146b"
        );
        console.log("SongDisp At : " + at.access_token);
        console.log("TrackID " + trackID);
        const songInfo = await getTrack(trackID, at);
        setSongDet(songInfo);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSongPage();
  }, [trackID]);

  return (
    <div>
      <Link to="/">Home</Link>
      <h1>SOng INformation</h1>
      {loading ? (
        <h1>LOading...</h1>
      ) : (
        <div>
          <div>
            <h1>{songDet.name}</h1>
            <h2>{songDet.artists[0].name}</h2>
            <h2>{songDet.album.name}</h2>
          </div>
          <button onClick={handleAddSongDb}>Add to DB</button>
        </div>
      )}
    </div>
  );
};

export default SongPage;
