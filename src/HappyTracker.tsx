import { type FC, memo } from "react";
import Button from "./Button";

type HappyTrackerProps = {};

const HappyTracker: FC<HappyTrackerProps> = (props) => {
  return(
    <div className="bg-orange-700 px-8 py-4 rounded-2xl">
        You were happy 20 times.
    </div>
  )
};



export default memo(HappyTracker);
