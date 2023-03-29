import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch} from "react-redux"; 
import {updateTuitThunk} from "../../services/tuits-thunks";
// import { dispatch } from "react";

const TuitStats = (post) => {
    // const likedOrNot = post.liked ? "fa fa-heart pe-2 icon-red" : "fa fa-heart pe-2";
    const dispatch = useDispatch();
    return(
        <div className="wd-interactions-G pt-2 pb-2 d-flex align-content-center">
            <div className="col">
                <i className="fa fa-comment pe-2"></i>{post.replies}
            </div>
            <div className="col">
                <i className="fa fa-retweet pe-2"></i>{post.retuits}
            </div>
            <div className="col">
                {/* { post.liked && <i onClick={() => dispatch(updateTuitThunk({
                    ...post,
                    likes: post.likes - 1,
                    liked: false
                    }))}
                    className="fa fa-heart pe-2 icon-red"></i> }

                { !post.liked && <i onClick={() => dispatch(updateTuitThunk({
                    ...post,
                    likes: post.likes + 1,
                    liked: true
                    }))}
                    className="fa fa-heart pe-2"></i> } */}

                <i onClick={() => dispatch(updateTuitThunk({
                    ...post,
                    likes: post.likes + 1,
                    liked: false
                    }))}
                    className="fa fa-heart pe-2 icon-red"></i>
                {post.likes}
            </div>
            <div className="col">
                <i onClick={() => dispatch(updateTuitThunk({
                    ...post,
                    dislikes: post.dislikes + 1,
                    disliked: true
                    }))}
                    className="fa fa-thumbs-down icon-black pe-2"></i>

                {post.dislikes}
            </div>
            <div className="col">
                <i className="bi bi-box-arrow-up pe-2"></i>
            </div>
        </div>
    );
};
export default TuitStats;
