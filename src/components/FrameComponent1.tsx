import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
  orchestrators?: string;
  orchestratorsWillBeRespon?: string;
  pattern?: string;
  frame512918690?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  orchestrators,
  orchestratorsWillBeRespon,
  pattern,
  frame512918690,
  propBackgroundColor,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={[styles.orchestratorsParent, className].join(" ")}
      style={frameDivStyle}
    >
      <h1 className={styles.orchestrators}>{orchestrators}</h1>
      <div className={styles.orchestratorsWillBeResponsiParent}>
        <div className={styles.orchestratorsWillBe}>
          {orchestratorsWillBeRespon}
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.patternParent}>
            <img className={styles.patternIcon} alt="" src={pattern} />
            <img className={styles.frameChild} alt="" src={frame512918690} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
