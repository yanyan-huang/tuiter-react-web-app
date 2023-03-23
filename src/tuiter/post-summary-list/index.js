import React from "react";
import PostSummaryItem from "./post-summary-item";
// import postsArray from './posts.json';
import {useSelector} from "react-redux"; // to getting tuits from the store


const PostSummaryList = () => {
    const postsArray = useSelector((state) => state.tuits); // get tuits from the state in the store
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostSummaryItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;
