import axios from "axios";
import React from "react";

const getSearchTrack = async (trackName, artistName, access_token) => {
  try {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://api.spotify.com/v1/search?q=track:${trackName}%20artist:${artistName}&type=track`,
      headers: {
        Authorization: `Bearer ${access_token.access_token}`,
      },
    };
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default getSearchTrack;
