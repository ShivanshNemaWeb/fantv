import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop62}>
      <FrameComponent3 />
      <img
        className={styles.desktop62Child}
        alt=""
        src="/ellipse-2719@2x.png"
      />
      <section className={styles.desktop62Inner}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <FrameComponent2 />
          <FrameComponent />
        </div>
      </section>
      <section className={styles.contentContainer}>
        <div className={styles.transitionContainer}>
          <div className={styles.transitionHeaderContainer}>
            <h1 className={styles.theTransitionCdnDcdn}>
              The transition CDN-dCDN
            </h1>
          </div>
          <div className={styles.fancloudPioneersA}>
            FanCloud pioneers a new era of connectivity with its decentralised
            content delivery network (dCDN), leveraging a global network of
            community-powered nodes. By harnessing a decentralised architecture,
            dCDN drastically reduces data transfer and compute costs while
            enhancing load time. Join FanCloud’s dCDN network and experience the
            future of seamless, secure and community- driven consumption
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desktop;
