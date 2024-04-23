import React, { useEffect, useState } from "react";
import getPlayList from "../apiSpotify/getPlayList";
import { Link, useParams } from "react-router-dom";
import { getGenAT } from "../apiSpotify/getSpotifyAT";
import addSong from "../api/addSong";

const PlayListPage = () => {
  const { playlistID } = useParams();
  const [plDet, setPlDet] = useState({});
  const [loading, setLoading] = useState(true);

  const handleAddSongsDb = async () => {
    for (let i = 0; i < plDet.tracks.items.length; i++) {
      console.log("Track : " + plDet.tracks.items[i].track.name);
      const e = plDet.tracks.items[i];
      await addSong(
        e.track.name,
        e.track.external_urls.spotify,
        null,
        null,
        null,
        e.track.artists[0].name,
        e.track.artists[0].external_urls.spotify,
        e.track.album.name,
        e.track.album.external_urls.spotify,
        e.track.popularity
      );
    }
  };

  useEffect(() => {
    const fetchPL = async () => {
      try {
        const at = await getGenAT(
          "db50576864454fc19a8c2410b1323464",
          "811f528fbccb447991f8b5816dd5146b"
        );
        console.log("PLDisp At : " + at.access_token);
        console.log("PlayListID " + playlistID);
        const PLInfo = await getPlayList(playlistID, at);
        setPlDet(PLInfo);
        setLoading(false);
        console.log(JSON.stringify(PLInfo));
      } catch (err) {
        console.log(err);
      }
    };
    fetchPL();
  }, [playlistID]);

  return (
    <div>
      <Link to="/">Home</Link>
      <h1>PlayList INformation</h1>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <h1>{plDet.name}</h1>
          <h2>{plDet.owner.display_name}</h2>
          <h2>
            <b>Tracks :</b>
          </h2>
          <ul>
            {plDet.tracks.items.map((i) => (
              <li key={i.id}>
                <Link to={`/songs/${i.track.id}`}>{i.track.name}</Link>
              </li>
            ))}
          </ul>
          {/* <h2>{plDet.tracks.items}</h2> */}
          <button onClick={handleAddSongsDb}>Add to DB</button>
        </div>
      )}
    </div>
  );
};

export default PlayListPage;
