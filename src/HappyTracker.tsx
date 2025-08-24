import { type FC, memo } from "react";
import { useSelector } from "react-redux";
import { happyMomentSelector } from "./selectors/mood-selectors";

type HappyTrackerProps = {};

const HappyTracker: FC<HappyTrackerProps> = () => {
  const happyMoments= useSelector(happyMomentSelector);
    return (
      <div className="bg-orange-700 px-8 py-4 rounded-2xl">
        {happyMoments.map((m,index) => (
          <div key={index}>
            Happiness Intensity: {m.intensity}, when: {m.when.toString()}
          </div>
        ))}
      </div>
  );
};



export default memo(HappyTracker);
