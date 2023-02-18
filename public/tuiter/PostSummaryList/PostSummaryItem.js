const PostSummaryItem = (posts) => {
    return(`
<!--            <div class="row m-0 pt-1 pb-1 borders">-->
            <li class="list-group-item p-1">
                <div class="row m-0 p-0">
                    <div class="col-10">
                        <h4>${posts.topic}</h4>
                        <div class="d-flex justify-content-start align-items-end">
                            <h2>${posts.userName}</h2>
                            <i class="fa fa-check-circle icon-white mb-1"></i>
                            <h4> - ${posts.time}</h4>
                        </div>
                        <h2 class="mt-0 pt-0 pb-1">${posts.title}</h2>
                    </div>
                    <div class="col-2">
                        <img class="post-image float-end" src=${posts.image}>
                    </div>
                </div>
            </li>

         `);
}

// const PostSummaryItem = (posts) => {
//     return(`
//             <div class="row m-0 pt-1 pb-1 borders">
//                 <div class="col-10">
//                     <h4>${posts.topic}</h4>
//                     <div class="d-flex justify-content-start align-items-end">
//                         <h2>${posts.userName}</h2>
//                         <i class="fa fa-check-circle icon-white mb-1"></i>
//                         <h4> - ${posts.time}</h4>
//                     </div>
//                     <h2 class="mt-0 pt-0 pb-1">${posts.title}</h2>
//                 </div>
//                 <div class="col-2">
//                     <img class="post-image float-end" src=${posts.image}>
//                 </div>
//             </div>
//
//          `);
// }
export default PostSummaryItem;