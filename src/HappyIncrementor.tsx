import { type FC, memo } from "react";

type HappyIncrementorProps = {};

const HappyIncrementor: FC<HappyIncrementorProps> = (props) => {
  return(
    <div>
        <h3>Are  you happy?</h3>
        <button className="bg-orange-700 p-2 rounded-xl">Yes</button>

    </div>
  )
};

export default memo(HappyIncrementor);
