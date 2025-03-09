import React, { useState, useEffect } from "react";
import "./YoutubeFeed.css";
import axios from "axios";

const YoutubeFeed = () => {
    const [loading, setLoading] = useState(true);
    let ytDataList

  useEffect(() => {
    setLoading(true);
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/currentData/youtubeFeed`)
      .then((response) => {
        ytDataList = response.data;
        console.log(ytDataList);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return <div>YoutubeFeed</div>;
};

export default YoutubeFeed;
