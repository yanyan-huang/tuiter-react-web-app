import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
            <div class="news m-0 p-0">
             ${
                posts.map(posts => {
                    return PostSummaryItem(posts);
                }).join('')
             }
             </div>
    `);
}

export default PostSummaryList;
