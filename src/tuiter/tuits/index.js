import React from "react";
import TuitItem from "./tuit-item";
import { useSelector } from "react-redux"; // to getting tuits from the store
import "./index.css"

const TuitsList = () => {
    const tuitsArray = useSelector(state => state.tuits); // get tuits from the state in the store
    return(
        <ul className="list-group">
            {
                tuitsArray.map(tuit =>
                    <TuitItem key={tuit._id} post={tuit}/> )
            }
        </ul>
    );
};
export default TuitsList;