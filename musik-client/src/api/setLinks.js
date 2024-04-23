import React from "react";
import api from "./axiosConfig";

const setLinks = async (LinkName, type, url, title) => {
  try {
    const data = {
      LinkName: `${LinkName}`,
      type: `${type}`,
      url: `${url}`,
      title: `${title}`,
    };
    const response = await api.post("/api/v1/urls", data);
    return response;
    // console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

export default setLinks;
