import React from "react";
import PostSummaryItem from "./post-summary-item";
// import postsArray from './posts.json';
import {useSelector} from "react-redux"; // to getting tuits from the store


const PostSummaryList = () => {
    const {tuits, loading}  = useSelector(state => state.tuitsData); // grab tuits and loading flag from reducer
    // const {postsArray, loading2} = useSelector(state => state.tuitsData);
    // const postsArray = useSelector(state => state.tuits); // get tuits from the state in the store
    console.log("loading: "+ loading);
    return(
        <ul className="list-group">
            
            {
                tuits && tuits.map(post => 
                    <PostSummaryItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;
