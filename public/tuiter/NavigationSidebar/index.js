const NavigationSidebar = (active) => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
       <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${isActive(active)}">
            <div class="d-flex justify-content-start">
                <i class="fa fa-home mt-1 me-1"></i>
                <span class="d-none d-xl-block"> Home </span>
            </div>
        </a>
        <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action ${isActive(active)}" aria-current="true">
            <div class="d-flex justify-content-start">
                <i class="fa fa-hashtag mt-1 me-1"></i>
                <span class="d-none d-xl-block"> Explore </span>
            </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action ${isActive(active)}">
            <div class="d-flex justify-content-start">
                <i class="fa fa-bell mt-1 me-1"></i>
                <span class="d-none d-xl-block"> Notification </span>
            </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action ${isActive(active)}">
            <div class="d-flex justify-content-start">
                <i class="fa fa-envelope mt-1 me-1"></i>
                <span class="d-none d-xl-block"> Messages </span>
            </div>
        </a>
        <a href="../bookmarks/index.html" class="list-group-item list-group-item-action ${isActive(active)}">
            <div class="d-flex justify-content-start">
                <i class="fa fa-bookmark mt-1 me-1"></i>
                <span class="d-none d-xl-block"> Bookmarks </span>
            </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action ${isActive(active)}">
            <div class="d-flex justify-content-start">
                <i class="fa fa-list mt-1 me-1"></i>
                <span class="d-none d-xl-block"> Lists </span>
            </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action ${isActive(active)}">
            <div class="d-flex justify-content-start">
                <i class="fa fa-user mt-1 me-1"></i>
                <span class="d-none d-xl-block"> Profile </span>
            </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action ${isActive(active)}">
            <div class="d-flex justify-content-start">
                <i class="fa fa-comment-dots mt-1 me-1"></i>
                <span class="d-none d-xl-block"> More </span>
            </div>
        </a>
        
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

function isActive(navTab) {
    return (navTab === 'explore') ? 'active' : '';
}
