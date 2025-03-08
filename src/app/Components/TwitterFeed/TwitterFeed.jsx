import { useEffect } from "react";
import "./TwitterFeed.css";
const TwitterFeed = () => {
  useEffect(() => {
    // Load Twitter script dynamically
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="twitter-container">
      Latest Posts on X
      <div className="twitter-inner-container">
        <a
          className="twitter-timeline"
          href="https://twitter.com/F1?ref_src=twsrc%5Etfw"
        >
          Tweets by F1
        </a>
      </div>
    </div>
  );
};

export default TwitterFeed;
