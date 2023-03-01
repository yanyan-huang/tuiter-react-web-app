import React from "react";
import "./index.css";
import SharingContent from "./sharing-content";
// import bootstrap?
const PostItem = (
    {
        post = {
        "_id": 1,
        "avatar": "elonmusk.jpeg",
        "userName": "Elon Musk",
        "handle": "elonmusk",
        "time": "23h",
        "message": "Amazing show about inspiration4x mission!",
        "image": "inspiration4.jpeg",
        "sharingTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
        "sharingAbstract":"From training to launch to landing, this all-access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space...",
        "sharingSource": "netflix.com",
        "comments": "4.2K",
        "retweets": "3.5K",
        "likes": "37.5K"
        }
    }
) => {
    return(
        <div className="row m-0 pt-1 pb-1 pe-2 post borders">
            <div className=" col-2 pt-2">
                <img className="post-image rounded-circle float-end" alt="" src={post.avatar}></img>
            </div>
            <div className="col-10 pt-2">
                <div className=" d-flex justify-content-between">
                    <div className="col-11 d-flex justify-content-start align-items-end">
                        <h2>{post.userName}</h2>
                        <i className="fa fa-check-circle icon-blue mb-1"></i>
                        <h4> @{post.handle}</h4>
                        <h4> · {post.time}</h4>
                    </div>
                    <div className="col-1">
                        <i className="fa fa-ellipsis-h float-end icon-gray"></i>
                    </div>
                </div>

                <h4 className="mt-0 pt-0 pb-1">{post.message}</h4>
                <div className="card mt-2">
                    <img src={post.image}
                         className="card-img-top" alt="..."></img>
                        <SharingContent post={post}/>
                        {/*${cardbody(posts)}*/}
                    {/*<div className="card-body">*/}
                    {/*    <h3 className="card-title">{post.sharingTitle}</h3>*/}
                    {/*    <p className="card-text">*/}
                    {/*        {post.sharingAbstract}*/}
                    {/*        <br/>*/}
                    {/*        <i className="fa fa-link"></i>{post.sharingSource}*/}
                    {/*    </p>*/}
                    {/*</div>*/}

                </div>

                <div className="wd-interactions-G pt-2 pb-2 d-flex align-content-center">
                    <div className="col-3">
                        <i className="fa fa-comment pe-2"></i>{post.comments}
                    </div>
                    <div className="col-3">
                        <i className="fa fa-retweet pe-2"></i>{post.retweets}
                    </div>
                    <div className="col-3">
                        <i className="fa fa-heart pe-2"></i>{post.likes}
                    </div>
                    <div className="col-3">
                        <i className="fa fa-arrow-circle-o-up pe-2"></i>
                    </div>
                </div>

            </div>

        </div>

    );
};
export default PostItem;

