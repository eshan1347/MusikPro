import React from "react";
import api from "./axiosConfig";
import axios from "axios";
import setLinks from "./setLinks";
import getByTitle from "./getByTitle";
import getAudioFeatures from "../apiSpotify/getAudioFeatures";
import { getGenAT } from "../apiSpotify/getSpotifyAT";

const addSong = async (
  title,
  spotURL,
  ytURL,
  dlink,
  lyric,
  artName,
  artInfo,
  albName,
  albInfo,
  popularity
) => {
  try {
    const trackID = spotURL.split("/").pop().split("?")[0];
    const at = await getGenAT(
      "db50576864454fc19a8c2410b1323464",
      "811f528fbccb447991f8b5816dd5146b"
    );
    const trackAudioFeat = await getAudioFeatures(trackID, at);
    console.log(JSON.stringify(trackAudioFeat));
    const data = {
      title: `${title}`,
      popularity: popularity,
      duration: trackAudioFeat.duration_ms,
      acousticness: trackAudioFeat.acousticness,
      danceability: trackAudioFeat.danceability,
      energy: trackAudioFeat.energy,
      instrumentalness: trackAudioFeat.instrumentalness,
      key: trackAudioFeat.key,
      liveness: trackAudioFeat.liveness,
      loudness: trackAudioFeat.loudness,
      mode: trackAudioFeat.mode,
      speechiness: trackAudioFeat.speechiness,
      tempo: trackAudioFeat.tempo,
      timeSignature: trackAudioFeat.time_signature,
      valence: trackAudioFeat.valence,
    };
    const response = await api.post("api/v1/songs", data);
    console.log(response.data.title);
    await setLinks("Spotify", "spotify", spotURL, response.data.title);
    await setLinks("Youtube", "yt", ytURL, response.data.title);
    await setLinks("Download : 9x", "dlink", dlink, response.data.title);
    await setLinks("Lyrics : Genius", "lyric", lyric, response.data.title);
    await setLinks(artName, "artInfo", artInfo, response.data.title);
    await setLinks(albName, "albInfo", albInfo, response.data.title);
    console.log(await getByTitle(title));
    // return response.data;
    // console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

export default addSong;
