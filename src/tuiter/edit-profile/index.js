import React from "react";
import { useSelector } from "react-redux"; // to getting profile from the store
import { Link } from "react-router-dom";

const EditProfile = () => {
    const profile = useSelector(state => state.profile); // get profile from the state in the store
    return(
        <div className="text-secondary">
            <div className="d-flex mb-1 pe-3">
                <div className="col-10 d-flex align-items-center mb-1">
                    <i className="bi bi-x-lg ps-2"></i>
                    <div className="fs-4 fw-bold text-black ps-3">{profile.firstName} {profile.lastName}</div>
                </div>
                <button className="col-2 btn btn-dark float-end rounded-pill fw-bold pe-2 m-2">Save</button>
            </div>
            
            <div>
                <div className="position-relative">
                    <div className="">
                        <img src={profile.bannerPicture} alt="..." className="opacity-75 w-100"></img>
                        <div className="card-img-overlay d-flex align-items-center justify-content-center">
                            <button className="rounded-circle bg-secondary border-0 bg-opacity-75"><i className="bi bi-camera text-white"></i></button>
                            <button className="rounded-circle bg-secondary border-0 bg-opacity-75 ms-3"><i className="bi bi-x-lg text-white"></i></button>
                        </div>
                    </div>
                    <div className="">
                        <img src={profile.profilePicture} alt="..." className="opacity-75 rounded-circle h-50 card-img-overlay top-50 mt-5 ms-3"></img>
                        <div className="d-flex align-items-start ms-5">
                            <button className="rounded-circle bg-secondary border-0 bg-opacity-75 position-absolute"><i className="bi bi-camera text-white"></i></button>
                        </div>
                    </div>                    
                </div>

                <div className="form-group p-3 mt-4">
                    <label for="nameInput" className="position-absolute mt-3 ms-3">Name</label>
                    <input
                        id="nameInput" 
                        value={profile.firstName + " " + profile.lastName} 
                        className="form-control text-black ps-3 pt-4 mt-3" 
                        rows="1"
                        style={{height: "60px"}}>
                    </input>

                    <label for="nameInput" className="position-absolute mt-3 ms-3">Bio</label>
                    <textarea
                        id="nameInput" 
                        value={profile.bio} 
                        className="form-control text-black mt-3 pt-4 ps-3" 
                        rows="1"
                        style={{height: "80px"}}
                        wrap="hard">
                    </textarea>

                    <label for="nameInput" className="position-absolute mt-3 ms-3">Location</label>
                    <input
                        id="nameInput" 
                        value={profile.location} 
                        className="form-control text-black pt-4 mt-3 ps-3" 
                        rows="1"
                        style={{height: "60px"}}>
                    </input>
                </div>

            </div>
        </div>
    );
};
export default EditProfile;
