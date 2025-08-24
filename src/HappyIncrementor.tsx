import { type FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { happyButtonClicked } from "./actions/mood-actions";

type HappyIncrementorProps = {};

const HappyIncrementor: FC<HappyIncrementorProps> = () => {
  const [quantity, setQuantity]= useState(0);
  const dispatch= useDispatch();

  function increment(){
    dispatch(happyButtonClicked(quantity, new Date()));
  }

  return(
    <div>
        <h3>Are  you happy?</h3>
        <input className="border border-gray-300 rounded-md" type="number" value={quantity} onChange={(event)=> setQuantity(+event.target.value)}/>
        <button onClick={increment} className="bg-orange-700 p-2 rounded-xl">Yes</button>
    </div>
  )
};

export default memo(HappyIncrementor);


//dispatch->store->reducer->action->stores data 
