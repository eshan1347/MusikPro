import React from "react";
import getTrack from "../apiSpotify/getTrack";

const SongDetails = async (spotUrl, access_token) => {
  console.log("Spotify url " + spotUrl);
  const trackID = spotUrl.split("/").pop().split("?")[0];
  console.log("TrackID : " + trackID);
  const songInfo = await getTrack(trackID, access_token);
  return songInfo;
};

export default SongDetails;
