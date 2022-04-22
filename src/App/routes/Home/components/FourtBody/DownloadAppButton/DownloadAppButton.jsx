import { AiFillApple } from "react-icons/ai";
import { RiGooglePlayFill } from "react-icons/ri";
import { usePointer } from "../../../../../contexts/CustomCursorProvider";
import { appLinks } from "../../../../../data/homeFourthBody";

import "./DownloadAppButton.scss";

const DownloadAppButton = ({ platform }) => {
  const pointer = usePointer();

  return (
    <a
      className="download-app-button"
      href={platform === "apple" ? appLinks.appStore : appLinks.playStore}
    >
      <div className={`icon ${platform}`}>
        {platform === "apple" ? <AiFillApple /> : <RiGooglePlayFill />}
      </div>
      <div className="content" {...pointer}>
        <span>{platform === "apple" ? "Download on" : "Get it on"}</span>
        <p>{platform === "apple" ? "App Store" : "Google Play"}</p>
      </div>
    </a>
  );
};

export default DownloadAppButton;
