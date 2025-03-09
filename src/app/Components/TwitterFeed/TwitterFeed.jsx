import { useEffect } from "react";
import "./TwitterFeed.css";
import Image from "next/image";
import twitterIcon from "../../../Assets/twitter-icon.svg";

const TwitterFeed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);
  }, []);


  //MAY REMOVE ICON
  return (
    <>
      <div className="twitter-heading-container">
        <Image src={twitterIcon} className="twitter-icon" alt="Twitter Logo" width={90} />
        {/* <h2>Latest On</h2> */}
      </div>
      <div className="twitter-inner-container">
        <a
          className="twitter-timeline"
          href="https://twitter.com/F1?ref_src=twsrc%5Etfw"
        >
          Tweets by F1
        </a>
      </div>
    </>
  );
};

export default TwitterFeed;
