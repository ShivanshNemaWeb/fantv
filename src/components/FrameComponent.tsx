import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.contentNodesParent}>
        <h1 className={styles.contentNodes}>Content Nodes</h1>
        <div className={styles.frameGroup}>
          <div className={styles.contentNodesEarnRewardsFoWrapper}>
            <div className={styles.contentNodesEarn}>
              Content Nodes, Earn rewards for supplying their GPU, Storage and
              bandwidth for dCDN
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.patternParent}>
              <img className={styles.patternIcon} alt="" src="/pattern.svg" />
              <div className={styles.patternContainer} />
            </div>
            <button className={styles.deployContainer}>
              <div className={styles.deployContainerChild} />
              <div className={styles.deployButtonContainer}>
                <div className={styles.deploy}>Deploy</div>
              </div>
              <img
                className={styles.vuesaxboldarrowRightIcon}
                alt=""
                src="/vuesaxboldarrowright-1.svg"
              />
            </button>
          </div>
        </div>
      </div>
      <FrameComponent1
        orchestrators="Orchestrators"
        orchestratorsWillBeRespon="Orchestrators will be responsible for connecting the client with the content node for seamless streaming. Traffic distribution will be based on multiple factors like job type, performance"
        pattern="/pattern-1.svg"
        frame512918690="/frame-512918690@2x.png"
      />
      <FrameComponent1
        orchestrators="Validators"
        orchestratorsWillBeRespon="Validators will be responsible for validating the execution of dCDN Network. Validators will earn rewards from Staking and earn a cut on the executions validated."
        pattern="/pattern-2.svg"
        frame512918690="/frame-512918690-1@2x.png"
        propBackgroundColor="#adffe4"
      />
    </div>
  );
};

export default FrameComponent;
