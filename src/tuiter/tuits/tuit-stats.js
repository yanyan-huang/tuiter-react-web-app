import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { likeDislikeTuit } from "../reducers/tuits-reducer";
import { useDispatch } from "react-redux";

const TuitStats = (post) => {
    const likedOrNot = post.liked ? "fa fa-heart pe-2 icon-red" : "fa fa-heart pe-2";
    const dispatch = useDispatch();
    const onClickLike = (id) => {
        dispatch(likeDislikeTuit(id));
        }
    return(
        <div className="wd-interactions-G pt-2 pb-2 d-flex align-content-center">
            <div className="col-3">
                <i className="fa fa-comment pe-2"></i>{post.replies}
            </div>
            <div className="col-3">
                <i className="fa fa-retweet pe-2"></i>{post.retuits}
            </div>
            <div className="col-3">
                <i onClick={() => onClickLike(post._id)}
                    className={likedOrNot}
                    ></i>
                {post.likes}
            </div>
            <div className="col-3">
                <i className="bi bi-box-arrow-up pe-2"></i>
            </div>
        </div>
    );
};
export default TuitStats;
