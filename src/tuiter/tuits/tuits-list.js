import React, {useEffect}  from "react";
import TuitItem from "./tuit-item";
import { useDispatch, useSelector } from "react-redux"; // to getting tuits from the store
import "./index.css"
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading}  = useSelector(state => state.tuitsData); // grab tuits and loading flag from reducer
    // console.log("tuits: " +  tuits)
    const dispatch = useDispatch();
    useEffect(() => {dispatch(findTuitsThunk())}, [])
    // useEffect(() => {dispatch(findTuitsThunk())}, [dispatch])
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuits.map(tuit =>
                    <TuitItem key={tuit._id} post={tuit}/> )
            }
        </ul>
    );
};
export default TuitsList;