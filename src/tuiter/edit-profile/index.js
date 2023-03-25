import React from "react";
import { useSelector } from "react-redux"; // to getting profile from the store
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProfile } from "../reducers/profile-reducer";
import { useState } from "react";

const EditProfile = () => {
    const defaultProfile = useSelector(state => state.profile); // get profile from the state in the store
    const [profile, setProfile] = useState(defaultProfile);
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    // const [name, setName] = useState(profile.name);
    const dispatch = useDispatch();
    const handleSaveProfile = (event) => {
        // alert("Save button clicked");
        const newProfile = {
            ...profile,
            // firstName: profile.firstName,
            // lastName: profile.lastName,
            // numberOfTweets: profile.numberOfTweets,
            // handle: profile.handle,
            // profilePicture: profile.profilePicture,
            // bannerPicture: profile.bannerPicture,
            // bio: profile.bio,
            // website: profile.website,
            // location: profile.location,
            // dateOfBirth: profile.dateOfBirth,
            // dateJoined: profile.dateJoined,
            // followingCount: profile.followingCount,
            // followersCount: profile.followersCount,
        };
        dispatch(updateProfile(newProfile));
    };
    // const name = profile.fistName + " " + profile.lastName;

    function handleNameChange(e) {
        const newName = e.target.value;
        setFirstName(newName.split(" ")[0]);
        setLastName(newName.split(" ")[1]);
        // setName(newName);
        const newProfile = {
            ...profile,
            firstName: firstName,
            lastName: lastName,
            // name: name,
        }
        setProfile(newProfile)
    }

    return(
        <div className="text-secondary">
            {/* {profile.firstName}
            {profile.lastName}
            {profile.bio} */}
            {/* {profile.location} */}
            {/* {profile.website}
            {profile.dateOfBirth} */}
            <div className="d-flex mb-1 pe-3">
                <div className="col-10 d-flex align-items-center mb-1">
                    <Link to="/tuiter/profile"> 
                        <i className="bi bi-x-lg ps-2"></i>
                    </Link>
                    {/* <div className="fs-4 fw-bold text-black ps-3">{profile.name}</div> */}
                    <div className="fs-4 fw-bold text-black ps-3">{profile.firstName} {profile.lastName}</div>
                </div>
                <button 
                    onClick={handleSaveProfile}
                    className="col-2 btn btn-dark float-end rounded-pill fw-bold pe-2 m-2">Save</button>
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
                        onChange={(event) => handleNameChange(event)}
                        // onChange={(event) => setProfile({...profile, name: event.target.value})}
                        className="form-control text-black ps-3 pt-4 mt-3" 
                        rows="1"
                        style={{height: "60px"}}>
                    </input>

                    <label for="nameInput" className="position-absolute mt-3 ms-3">Bio</label>
                    <textarea
                        id="nameInput" 
                        onChange={(event) => setProfile({...profile, bio: event.target.value})}
                        value={profile.bio} 
                        className="form-control text-black mt-3 pt-4 ps-3" 
                        rows="1"
                        style={{height: "80px"}}
                        wrap="hard">
                    </textarea>

                    <label for="nameInput" className="position-absolute mt-3 ms-3">Location</label>
                    <input
                        id="nameInput" 
                        onChange={(event) => setProfile({...profile, location: event.target.value})}
                        value={profile.location} 
                        className="form-control text-black pt-4 mt-3 ps-3" 
                        rows="1"
                        style={{height: "60px"}}>
                    </input>

                    <label for="websiteInput" className="position-absolute mt-3 ms-3">Website</label>
                    <input
                        id="websiteInput" 
                        onChange={(event) => setProfile({...profile, website: event.target.value})}
                        value={profile.website} 
                        className="form-control text-black pt-4 mt-3 ps-3" 
                        rows="1"
                        style={{height: "60px"}}>
                    </input>

                    <label for="websiteInput" className="position-absolute mt-3 ms-3">Date of Birth</label>
                    <input
                        id="websiteInput" 
                        onChange={(event) => setProfile({...profile, dateOfBirth: event.target.value})}
                        value={profile.dateOfBirth} 
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
