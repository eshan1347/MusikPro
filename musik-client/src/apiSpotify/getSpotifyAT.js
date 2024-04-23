import React from "react";
import QueryString from "qs";
import axios from "axios";

const getSpotifyAT = async (cli_id, cli_secret) => {
  try {
    const data = QueryString.stringify({
      grant_type: "client_credentials",
      client_id: `${cli_id}`,
      client_secret: `${cli_secret}`,
    });
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://accounts.spotify.com/api/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // Cookie:
        //   "__Host-device_id=AQC4o0pWJmt3KKfKHBRbKFiXp0ZScDAqQA2AOxNPAssEmdgRYoaZzpSvUBqQF-4FAGufGBzLJYO6HkTNCOysHB_nRyh8AwYNqBs",
      },
      data: data,
    };
    const access_token = await axios.request(config);
    console.log(JSON.stringify(access_token.data));
    return access_token.data;
  } catch (err) {
    console.log(err);
  }
};

const getGenAT = (cli_id, cli_secret) => {
  return new Promise((resolve, reject) => {
    const at = getSpotifyAT(cli_id, cli_secret);
    resolve(at);
  });
};

export { getGenAT, getSpotifyAT };
