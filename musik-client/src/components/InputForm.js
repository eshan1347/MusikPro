import React, { useState, useEffect } from "react";
import setLinks from "../api/setLinks";
import getSongs from "../api/getSongs";
import addSong from "../api/addSong";

const InputForm = () => {
  const [songs, setSongs] = useState();
  const [title, setTitle] = useState("");
  const [albInfo, setAlbInfo] = useState("");
  const [albUrl, setAlbUrl] = useState("");
  const [artInfo, setArtInfo] = useState("");
  const [artUrl, setArtUrl] = useState("");
  const [artwork, setArtwork] = useState("");
  const [dlink, setDlink] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [ytLink, setYtLink] = useState("");
  const [spotUrl, setSpotUrl] = useState("");
  const [pop, setPop] = useState(0);
  const [fetchCount, setFetchCount] = useState(0);

  // example Sunflower, Spider-man:Into the Spider-verse,
  //  https://open.spotify.com/album/35s58BRTGAEWztPo9WqCIs?si=KYSaSHMPT2qb1lHQ1kuRcA,
  //  Post Malone, https://open.spotify.com/artist/246dkjvS1zLTtiykXe5h60?si=h66bLmh7QaqxUInkggKLnw,
  //  https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSpider-Man%3A_Into_the_Spider-Verse_%2528soundtrack%2529&psig=AOvVaw3mvrSgmPkOxpu05gc8r6VM&ust=1692118118044000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDRvKzN3IADFQAAAAAdAAAAABAE,
  //  https://www.9xyoutube.com/watch?v=ApXoWvfEYVU,
  //  https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjypNHKzdyAAxXfq1YBHSv-DmAQFnoECDAQAQ&url=https%3A%2F%2Fgenius.com%2FPost-malone-and-swae-lee-sunflower-lyrics&usg=AOvVaw0-A0Aj_mWUPY1trxwaZMuW&opi=89978449,
  //  https://open.spotify.com/track/3KkXRkHbMCARz0aVfEt68P?si=f2e46a24eef64409,
  //  https://www.youtube.com/watch?v=ApXoWvfEYVU

  //example

  const handleAddSong = async (e) => {
    e.preventDefault();
    await addSong(
      title,
      spotUrl,
      ytLink,
      dlink,
      lyrics,
      artInfo,
      artUrl,
      albInfo,
      albUrl,
      popularity
    );
    setFetchCount(2);
  };

  useEffect(() => {
    const fetchSongs = async () => {
      setSongs(getSongs());
      setFetchCount(1);
    };
    fetchSongs();
  }, [fetchCount]);
  // console.log(songs);
  return (
    <div>
      <h1>Form: </h1>
      <form onSubmit={handleAddSong}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Album Name:</label>
        <input
          type="text"
          value={albInfo}
          onChange={(e) => setAlbInfo(e.target.value)}
        />
        <label>Album URL:</label>
        <input
          type="text"
          value={albUrl}
          onChange={(e) => setAlbUrl(e.target.value)}
        />
        <label>Artist Name:</label>
        <input
          type="text"
          value={artInfo}
          onChange={(e) => setArtInfo(e.target.value)}
        />
        <label>Artist URL:</label>
        <input
          type="text"
          value={artUrl}
          onChange={(e) => setArtUrl(e.target.value)}
        />
        <br></br>
        <br></br>
        <label>Download Link:</label>
        <input
          type="text"
          value={dlink}
          onChange={(e) => setDlink(e.target.value)}
        />
        <label>Lyrics Link:</label>
        <input
          type="text"
          value={lyrics}
          onChange={(e) => setLyrics(e.target.value)}
        />
        <label>Spotify URL:</label>
        <input
          type="text"
          value={spotUrl}
          onChange={(e) => setSpotUrl(e.target.value)}
        />
        <label>Youtube URL:</label>
        <input
          type="text"
          value={ytLink}
          onChange={(e) => setYtLink(e.target.value)}
        />
        <label>Popularity:</label>
        <input
          type="text"
          value={pop}
          onChange={(e) => setPop(e.target.value)}
        />
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;
