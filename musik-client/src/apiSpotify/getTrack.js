import React from "react";
import QueryString from "qs";
import axios from "axios";

const getTrack = async (trackID, access_token) => {
  try {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://api.spotify.com/v1/tracks/${trackID}`,
      headers: {
        Authorization: `Bearer ${access_token.access_token}`,
      },
    };
    console.log(
      "getTrack config " + config.url + " " + config.headers.Authorization
    );
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default getTrack;
