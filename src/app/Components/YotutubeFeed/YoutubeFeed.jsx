import React, { useState, useEffect } from "react";
import "./YoutubeFeed.css";
import axios from "axios";

const YoutubeFeed = () => {
  const [loading, setLoading] = useState(true);
  const [ytDataList, setYtDataList] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/currentData/youtubeFeed`)
      .then((response) => {
        setYtDataList(response.data);
        console.log(ytDataList);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="all-videos-container">
      {ytDataList.map((video) => (
        <div className="single-video-container">
          <iframe
            width="448"
            height="252"
            src={`https://www.youtube.com/embed/${video.videoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="title-and-description">
            <h3 className="yt-title">{video.title}</h3>
            <p className="yt-description">
              {video.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YoutubeFeed;
