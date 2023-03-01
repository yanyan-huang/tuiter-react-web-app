import React from "react";
import "./index.css";
// import postsArray from './posts-full.json';
const SharingContent = ({post}) => {
    if(post.sharingAbstract !== "") {
        return (
            <div className="card-body">
                <h3 className="card-title">{post.sharingTitle}</h3>
                <p className="card-text">
                    {post.sharingAbstract}
                    <br/>
                    <i className="fa fa-link"></i>{post.sharingSource}
                </p>
            </div>
        );
    } else {
    }

};
export default SharingContent;
