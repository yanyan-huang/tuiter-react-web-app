import React from "react";
import postsArray from './posts-full.json';
import PostItem from "./post-item";

const PostList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostList;

// import PostItem from "./PostItem.js";
// import posts from "./posts_full.js";
//
// const PostList = () => {
//     return (`
//             <div class="news m-0 p-0">
//              ${
//         posts.map(posts => {
//             return PostItem(posts);
//         }).join('')
//     }
//              </div>
//     `);
// }
//
// export default PostList;