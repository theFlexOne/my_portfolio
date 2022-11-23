import "./linkBadges.css";
import { ReactComponent as GitHub } from "../../assets/githubSVG.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedinSVG.svg";

const LinkBadges = () => {
  return (
    <div className="link-badges">
      <GitHub />
      <LinkedIn />
    </div>
  );
};

export default LinkBadges;
