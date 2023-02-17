import PostItem from "./PostItem.js";
import posts from "./posts_full.js";

const PostList = () => {
    return (`
            <div class="news m-0 p-0">
             ${
                posts.map(posts => {
                    return PostItem(posts);
                }).join('')
             }
             </div>
    `);
}

export default PostList;
