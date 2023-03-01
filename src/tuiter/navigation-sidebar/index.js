import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



const NavigationSidebar = (
    // {active = 'explore'}
    ) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">
            <Link to="/tuiter/home"  className="list-group-item">
              <i class="fab fa-twitter fa-2x icon-blue"></i> </Link>
            {/*<Link to="/tuiter/home"  className="list-group-item">*/}
            {/*    <i class="fa fa-twitter fa-2x icon-blue"></i> Tuiter</Link>*/}
            {/*<div className="list-group-item">*/}
            {/*    <i class="fa fa-twitter"></i> </div>*/}
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <div className="d-flex justify-content-start">
                    <i className="fa fa-home mt-1 me-1"></i>
                    <span className="d-none d-xl-block"> Home </span>
                </div>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <div className="d-flex justify-content-start">
                    <i className="fa fa-hashtag mt-1 me-1"></i>
                    <span className="d-none d-xl-block"> Explore </span>
                </div>
            </Link>

            {/*... shall we add more nav tabs?*/}
            <Link to="/tuiter/notifications" className={`list-group-item ${active === 'notifications'?'active':''}`}>
                <div className="d-flex justify-content-start">
                    <i className="fa fa-bell mt-1 me-1"></i>
                    <span className="d-none d-xl-block"> Notifications </span>
                </div>
            </Link>
            <Link to="/tuiter/messages" className={`list-group-item ${active === 'messages'?'active':''}`}>
                <div className="d-flex justify-content-start">
                    <i className="fa fa-envelope mt-1 me-1"></i>
                    <span className="d-none d-xl-block"> Messages </span>
                </div>
            </Link>
            <Link to="/tuiter/bookmarks" className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                <div className="d-flex justify-content-start">
                    <i className="fa fa-bookmark mt-1 me-1"></i>
                    <span className="d-none d-xl-block"> Bookmarks </span>
                </div>
            </Link>
            <Link to="/tuiter/lists" className={`list-group-item ${active === 'lists'?'active':''}`}>
                <div className="d-flex justify-content-start">
                    <i className="fa fa-list mt-1 me-1"></i>
                    <span className="d-none d-xl-block"> Lists </span>
                </div>
            </Link>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <div className="d-flex justify-content-start">
                    <i className="fa fa-user mt-1 me-1"></i>
                    <span className="d-none d-xl-block"> Profile </span>
                </div>
            </Link>

            {/*<a className={`list-group-item ${active === 'home'?'active':''}`}> Home </a>*/}
            {/*<a className={`list-group-item ${active === 'explore'?'active':''}`}> Explore</a>*/}
            {/*<a className={`list-group-item ${active === 'notifications'?'active':''}`}> Notifications </a>*/}
            {/*<a className={`list-group-item ${active === 'messages'?'active':''}`}> Messages </a>*/}
            {/*<a className={`list-group-item ${active === 'bookmarks'?'active':''}`}> Bookmarks </a>*/}
            {/*<a className={`list-group-item ${active === 'lists'?'active':''}`}>Lists </a>*/}
            {/*<a className={`list-group-item ${active === 'profile'?'active':''}`}> Profile </a>*/}
            <Link to="/tuiter/more"  className={`list-group-item ${active === 'more'?'active':''}`}> More </Link>
            <Link to="/" className="list-group-item"> Labs </Link>

            <div className="d-grid mt-2">
                <Link to="tweet.html"
                      className="btn btn-primary btn-block rounded-pill">
                    Tweet</Link>
            </div>
        </div>


    );
};
export default NavigationSidebar;


// const NavigationSidebar = (
//     {
//         active = 'explore'
//     }
// ) => {
//     // return null;
//     return (
//         <div>
//             <div className="list-group">
//                 <a className="list-group-item">Tuiter</a>
//                 <a className="list-group-item">Home</a>
//                 <a className="list-group-item">Explore</a>
//                 <a className="list-group-item">Notifications</a>
//                 <a className="list-group-item">Messages</a>
//                 <a className="list-group-item">Bookmarks</a>
//                 <a className="list-group-item">Lists</a>
//                 <a className="list-group-item">Profile</a>
//                 <a className="list-group-item">More</a>
//             </div>
//
//         </div>
//     );
// };
// export default NavigationSidebar;
