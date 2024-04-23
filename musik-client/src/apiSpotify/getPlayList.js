import React from "react";
import axios from "axios";

const getPlayList = async (playListID, access_token) => {
  try {
    const config = {
      method: "get",
      maxBodyLength: "Infinity",
      url: `https://api.spotify.com/v1/playlists/${playListID}`,
      headers: {
        Authorization: `Bearer ${access_token.access_token}`,
      },
    };
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data.tracks.items));
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default getPlayList;
