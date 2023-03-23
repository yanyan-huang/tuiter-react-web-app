import React from "react";
// import whoArray from './who.json';
import {useSelector} from "react-redux";
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    const WhoToFollow = useSelector((state) => state.who);
    return(
        <div>
            
            <ul className="list-group">
                <div className="list-group-item">
                    <h4>Who to follow</h4>
                </div>
                {
                    WhoToFollow.map(who =>
                        <WhoToFollowListItem
                            key={who._id} who={who}/> )
                }
                
            </ul>
        </div>
    );
};

export default WhoToFollowList;
