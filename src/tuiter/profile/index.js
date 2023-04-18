import React from "react";
import { useSelector } from "react-redux"; // to getting profile from the store
import { Link } from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile); // get profile from the state in the store
    return(
        <div className="text-secondary">
            <div className="d-flex flex-row mb-1">
                <Link to="/tuiter/home">
                    <i className="bi bi-arrow-left p-3"></i>
                </Link>

                
                <div className="ps-3">
                    <div className="fs-4 fw-bold text-black">{profile.firstName} {profile.lastName}</div>
                    <h6 className="">{profile.numberOfTweets} Tweets</h6>
                </div>
            </div>
            
            <div>
                
                <div className="position-relative">
                    <img src={`/images/${profile.bannerPicture}`} alt="..." className="w-100"></img>
                    <img src={`/images/${profile.profilePicture}`} alt="..." className="rounded-circle card-img-overlay h-50 top-50 mt-5 ms-3"></img>
                </div>

                <Link to="/tuiter/edit-profile">
                    <button className="btn btn-outline-primary float-end rounded-pill m-2">Edit Profile</button>
                </Link>
                <div className="p-3 mt-5">
                    <div className="fs-4 fw-bold text-black">{profile.firstName} {profile.lastName}</div>
                    <h6 className="">{profile.handle}</h6>
                    <p className="mt-3 text-black mb-2">
                        {profile.bio}
                    </p>
                    <div className="d-flex flex-row mb-2">
                        <div className="pe-5"><i className="bi bi-geo-alt text-secondary pe-2"></i>{profile.location}</div>
                        <div className="pe-5"><i className="bi bi-balloon text-secondary pe-2"></i>Born {profile.dateOfBirth}</div>
                        <div className="pe-5"><i className="bi bi-calendar3 text-secondary pe-2"></i>Joined {profile.dateJoined}</div>
                    </div>
                    <div className="d-flex flex-row mb-2">
                        <div className="pe-5"><b className="m-1 text-black">{profile.followingCount}</b> Following</div>
                        <div className="pe-5"><b className="m-1 text-black">{profile.followersCount}</b>Followers</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProfileComponent;


