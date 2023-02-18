import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
<!--            <div class="news m-0 p-0">-->
            <ul class="list-group">
             ${
                posts.map(posts => {
                    return PostSummaryItem(posts);
                }).join('')
             }
             </ul>
<!--             </div>-->
    `);
}

// const PostSummaryList = () => {
//     return (`
//             <div class="news m-0 p-0">
//              ${
//         posts.map(posts => {
//             return PostSummaryItem(posts);
//         }).join('')
//     }
//              </div>
//     `);
// }

export default PostSummaryList;
