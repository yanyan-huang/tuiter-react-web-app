import React from "react"; // do we need this line?
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import PostSummaryList from "./post-summary-list";


function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route index element={<HomeComponent/>}/>
                    <Route path="/home"    element={<HomeComponent/>}/>
                    <Route path="/explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <Routes>
                    <Route index element={<PostSummaryList/>}/>
                    <Route path="/home"    element={<PostSummaryList/>}/>
                    <Route path="/explore" element={<WhoToFollowList/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Tuiter


// import Nav from "../nav";
// import NavigationSidebar from "./navigation-sidebar";
// // import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
// // import PostSummaryItem  from "./post-summary-list/post-summary-item";
// import WhoToFollowList from "./who-to-follow-list";
// import PostSummaryList from "./post-summary-list";
// import ExploreComponent from "./explore";
//
// function Tuiter() {
//     return (
//         <div>
//             <Nav/>
//             <NavigationSidebar active="home"/>
//             <WhoToFollowList/>
//             <PostSummaryList/>
//             <ExploreComponent/>
//             {/*<PostSummaryItem/>*/}
//             {/*<WhoToFollowListItem/>*/}
//             {/*<WhoToFollowListItem who={{*/}
//             {/*    userName: 'NASA', handle: 'NASA',*/}
//             {/*    avatarIcon: 'nasa.png',*/}
//             {/*}}/>*/}
//             {/*<WhoToFollowListItem who={{*/}
//             {/*    userName: 'Tesla', handle: 'tesla',*/}
//             {/*    avatarIcon: 'tesla.png',*/}
//             {/*}}/>*/}
//             {/*<WhoToFollowListItem who={{*/}
//             {/*    userName: 'SpaceX', handle: 'SpaceX',*/}
//             {/*    avatarIcon: 'spacex.png',*/}
//             {/*}}/>*/}
//
//             <h1>Tuiter</h1>
//         </div>
//     )
// }
// export default Tuiter


// import {Link} from "react-router-dom";
//
// function Tuiter() {
//     return(
//         <div>
//             <Link to="/">Lab</Link> |
//             <Link to="/hello">Hello</Link> |
//             <Link to="/tuiter">Tuiter</Link>
//             <h1>Tuiter</h1>
//         </div>
//     )
// }
// export default Tuiter


// function Tuiter() {
//     return(
//         <div>
//             <h1>Tuiter</h1>
//         </div>
//     );
// }
// export default Tuiter
