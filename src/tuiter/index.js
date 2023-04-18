import React from "react"; 
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import { Routes, Route } from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer"; // import the new tuits reducer
import profileReducer from "./reducers/profile-reducer"; // import the new profile reducer
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";

import WhoToFollowList from "./who-to-follow-list";
import HomeComponent from "./home";
import PostSummaryList from "./post-summary-list";
import ProfileComponent from "./profile";
import EditProfile from "./edit-profile";

const store = configureStore(
    {reducer: 
        {who: whoReducer, 
        tuits: tuitsReducer,
        profile: profileReducer,
    }}); // add reducer to the store

function Tuiter() {
    return (
        <Provider store={store}>
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route index element={<HomeComponent/>}/>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                    <Route path="profile" element={<ProfileComponent/>}/>
                    <Route path="edit-profile" element={<EditProfile/>}/>
                </Routes>
            </div>

            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <Routes>
                    <Route index element={<PostSummaryList/>}/>
                    <Route path="home"    element={<PostSummaryList/>}/>
                    <Route path="explore" element={<WhoToFollowList/>}/>
                    <Route path="profile" element={<WhoToFollowList/>}/>
                    <Route path="edit-profile" element={<WhoToFollowList/>}/>
                </Routes>
            </div>
        </div>
        </Provider>
    );
}

export default Tuiter
