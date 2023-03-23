import React from "react";
import {useDispatch} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import TuitStats from "./tuit-stats";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = (
    {
        post = {
            // "topic": "Space",
            // "userName": "SpaceX",
            // "time": "2h",
            // "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            // "image": "tesla.png"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className=" col-2">
                    <img className="post-image rounded-circle float-end" alt="" src={`/images/${post.image}`}></img>
                </div>
                <div className="col-10">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}></i>
                    <div className="d-flex justify-content-start align-items-center">
                        <div className="fw-bold">{post.userName}</div>
                        &nbsp;<i className="fa fa-check-circle icon-blue mb-1"></i>&nbsp;
                        <span className="text-secondary"> {post.handle} · {post.time} </span>
                    </div>
                    
                    <div className="text-secondary pe-3">{post.tuit}</div>
                    {TuitStats(post)}
                </div>
            </div>
        </li>
    );
};
export default TuitItem;
