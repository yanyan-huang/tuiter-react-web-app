import PostSummaryList from "../PostSummaryList";


const ExploreComponent = () => {
    return (`
            <div class="row align-items-start">
                <div class="col-11 p-0">
                    <input class="form-control rounded-5 m-0 ps-5" type="text" placeholder="Search Twitter">
                    <i class="fa fa-search pos-relative-nudge-up-right"></i>
                </div>
                <div class="col-1 mt-1">
                    <a href="explore_settings.html">
<!--                        <i class="bi bi-gear icon-blue"></i>-->
                         <i class="fa fa-gear fa-2x"></i>
                    </a>
                </div>
            </div>
            <div class="row mb-1 pos-relative-nudge-up">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link d-none d-md-block" href="#">Entertainment</a>
                    </li>

                </ul>

            </div>
            <div class="row pos-relative-nudge-up">
                <div class="m-0 p-0 position-relative">
                    <img src="../../images/spacex-starship.png" class="head-image">
                    <div class="z-10 bottom-left text-black fw-bold fs-5">SpaceX's Starship</div>
                </div>
                ${PostSummaryList()} 
            </div>
    `);
}

export default ExploreComponent;