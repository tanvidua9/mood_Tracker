import { type FC, memo } from "react";
import { useSelector } from "react-redux";
import { sadMomentSelector } from "./selectors/mood-selectors";

type SadTrackerProps = {};

const SadTracker: FC<SadTrackerProps> = () => {
  const sadMoments= useSelector(sadMomentSelector);
 return (
    <div className="bg-blue-700 px-8 py-4 rounded-2xl">
      {sadMoments.map((m,index) => (
        <div key={index}>
          Sadness Intensity: {m.intensity}, when: {m.when.toString()}
        </div>
      ))}
    </div>
 );
};



export default memo(SadTracker);
