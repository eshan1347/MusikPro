import React from "react";
import api from "./axiosConfig";

const getByTitle = async (title) => {
  try {
    const response = await api.get(`/api/v1/songs/${title}`);
    // console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default getByTitle;
