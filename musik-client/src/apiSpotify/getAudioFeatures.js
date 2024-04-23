import React from "react";
import axios from "axios";

const getAudioFeatures = async (trackID, access_token) => {
  try {
    const config = {
      method: "get",
      maxBodyLength: "Infinity",
      url: `https://api.spotify.com/v1/audio-features/${trackID}`,
      headers: {
        Authorization: `Bearer ${access_token.access_token}`,
      },
    };
    const response = await axios.request(config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default getAudioFeatures;
