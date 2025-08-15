import { type FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { sadButtonClicked } from "./actions";

type SadIncrementorProps = {};

const SadIncrementor: FC<SadIncrementorProps> = () => {
  const [quantity,setQuantity]= useState(0);
  const dispatch= useDispatch();

  function increment(){
    dispatch(sadButtonClicked(quantity));
  }
  
  return(
    <div>
        <h3>Are  you sad?</h3>
        <input className="border border-gray-300 rounded-md" type="number" value={quantity} onChange={(event)=> setQuantity(+event.target.value)}/>
        <button onClick={increment} className="bg-blue-500 p-2 rounded-xl">Yes</button>

    </div>
  )
};



export default memo(SadIncrementor);
