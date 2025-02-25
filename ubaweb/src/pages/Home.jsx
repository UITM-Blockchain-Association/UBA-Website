import FrameOverlay from "../components/FrameOverlay";
import LogoSlider from "../components/LogoSlider";
import PastEvents from "../components/PastEvents";
import SocialsLinks from "../components/socialsLinks";
import "/src/assets/css/home/home.css";
import { ArrowUpRight } from "lucide-react";

const Home = () => {
  return (
    <>
      <main className="mainHome">
        <div className="mainBgImgBg">
          <div className="mainBgImgContainer">
            <img src="/home/mainBg.png" alt="" className="mainBg" />
          </div>
        </div>
        <div className="mainContent">
          <h1>
            UiTM <br />
            Blockchain <br />
            Association
          </h1>
          <div className="cardMain">
            <a href="/events" className="recruitText">
              RECRUITING MEMBERS !!
            </a>
            <div className="cardImgContainer">
              <img src="/home/qr-twitter.png" alt="" className="cardImg" />
              <a href="/events" className="joinUsText">
                JOIN US!
                <ArrowUpRight className="arrowIcon" size={40} />
              </a>
            </div>
          </div>
        </div>

        {/* Terbuat camni pulokkkk, bantai je laaaa */}
        <div className="secondContent">
          <PastEvents />
        </div>

        <div className="thirdContent">
          <LogoSlider />
        </div>

        <div className="fourthContent">
          <SocialsLinks />
        </div>
      </main>
      <FrameOverlay page="Home" />
    </>
  );
};

export default Home;
