import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="text-secondary">{post.userName} · {post.time}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div className="text-secondary pe-3">{post.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" alt="" src={`/images/${post.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;
