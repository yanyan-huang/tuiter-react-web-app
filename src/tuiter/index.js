import React from "react"; 
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import { Routes, Route } from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer"; // import the new tuits reducer
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
// do we need to import the below two lines?
import HomeComponent from "./home";
import PostSummaryList from "./post-summary-list";

const store = configureStore({reducer: {who: whoReducer, tuits: tuitsReducer}}); // add it to the store

function Tuiter() {
    return (
        <Provider store={store}>
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                {/*<ExploreComponent/>*/}
                <Routes>
                    <Route index element={<HomeComponent/>}/>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>

            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <Routes>
                    <Route index element={<PostSummaryList/>}/>
                    <Route path="home"    element={<WhoToFollowList/>}/>
                    <Route path="explore" element={<PostSummaryList/>}/>
                </Routes>
            </div>
        </div>
        </Provider>
    );
}

export default Tuiter
