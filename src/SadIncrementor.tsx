import { type FC, memo } from "react";

type SadIncrementorProps = {};

const SadIncrementor: FC<SadIncrementorProps> = (props) => {
  return(
    <div>
        <h3>Are  you sad?</h3>
        <button className="bg-blue-500 p-2 rounded-xl">Yes</button>

    </div>
  )
};



export default memo(SadIncrementor);
