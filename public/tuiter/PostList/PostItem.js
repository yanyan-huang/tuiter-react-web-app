const PostItem = (posts) => {
    return(`
            <div class="row m-0 pt-1 pb-1">
                <div class=" col-2 ">
                    <img class="post-image float-end" src=${posts.avatar}>
                </div>
                <div class="col-10 post">
                    <div class="d-flex justify-content-start align-items-end">
                        <h2>${posts.userName}</h2>
                        <i class="fa fa-check-circle icon-white mb-1"></i>
                        <h4> @${posts.handle}</h4>
                        <h4> · ${posts.time}</h4>
                    </div>
                    <h3 class="mt-0 pt-0 pb-1">${posts.message}</h3>
                    <div class="card border">
                       <img src=${posts.image}
                            class="card-img-top" alt="...">
                       ${cardbody(posts)}    
                    </div>

                    <div class="wd-interactions-G pt-2 pb-2 d-flex align-content-center">
                        <div class="col-3">
                            <i class="fa fa-comment pe-2"></i>${posts.comments}
                        </div>
                        <div class="col-3">
                            <i class="fa fa-retweet pe-2"></i>${posts.retweets}
                        </div>
                        <div class="col-3">
                            <i class="fa fa-heart pe-2"></i>${posts.likes}
                        </div>
                        <div class="col-3">
                            <i class="fa fa-arrow-circle-o-up pe-2"></i>
                        </div>
                    </div>

                </div>

            </div>
           
            
         `);
}
export default PostItem;

const cardbody = (posts) => {
    return posts.sharingAbstract !== '' ?
        (` <div class="card-body">
                <h3 class="card-title">${posts.sharingTitle}</h3>
                <p class="card-text">
                    ${posts.sharingAbstract}
                    <br/>
                    <i class="fa fa-link"></i>${posts.sharingSource}
                </p>
            </div>
        `) : ('')
}


