import { type FC, memo } from "react";
import { useSelector } from "react-redux";
import { happyCountSelector } from "./selectors";

type HappyTrackerProps = {};

const HappyTracker: FC<HappyTrackerProps> = () => {
  const happyCount= useSelector(happyCountSelector);
  return(
    <div className="bg-orange-700 px-8 py-4 rounded-2xl">
        Total happy points: {happyCount}
    </div>
  )
};



export default memo(HappyTracker);
