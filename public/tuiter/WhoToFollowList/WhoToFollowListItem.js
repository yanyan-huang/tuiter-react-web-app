const WhoToFollowListItem = (who) => {
    return(`
             <li class="list-group-item">
                <div class="row align-items-center">
                    <div class="col-2">
                        <img class="rounded-circle image-logo" src=${who.avatarIcon}>
                    </div>
                    <div class="col-6">
                        <div class="d-flex justify-content-start align-items-center">
                            <h2>${who.userName}</h2>
                            <i class="fa fa-check-circle icon-white mb-1"></i>
                        </div>
                        <h3 class="mt-0 pt-0 pb-1"> @${who.handle}</h3>
                    </div>
                    <div class="col-4">
                        <button type="button" class="btn btn-primary float-end rounded-5">Follow</button>
                    </div>
                </div>
            </li>
         `);
}
export default WhoToFollowListItem;