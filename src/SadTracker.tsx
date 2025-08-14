import { type FC, memo } from "react";
import Button from "./Button";

type SadTrackerProps = {};

const SadTracker: FC<SadTrackerProps> = (props) => {
  return(
    <div className="bg-blue-500 px-8 py-4 rounded-2xl">
        You were sad 10 times.
    </div>
  )
};



export default memo(SadTracker);
