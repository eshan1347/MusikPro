import React from "react";
import api from "./axiosConfig";

const getSongs = async () => {
  try {
    const response = await api.get("/api/v1/songs");
    console.log(response.data);
    return response.data;
    // setSongs(response.data);
  } catch (err) {
    console.log(err);
  }
};

export default getSongs;
