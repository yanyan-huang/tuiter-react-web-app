
import { createSlice } from "@reduxjs/toolkit";
// import profile from "../profile/profile.json";

const profile =   {
    "firstName": "Yanyan",
    "lastName": "Huang",
    "numberOfTweets": '1,000',
    "handle": "@YanyanHuang",
    "profilePicture": "yanyan.jpeg",
    "bannerPicture": "profile-banner-image.jpeg",
    "bio": "Lego, AI and Space enthusiast, Web Polymath, used to hate Salsa and Merengue, but now desperately learning to play and dance.",
    "website": "youtube.com/webdevtv",
    "location": "Boston, MA",	
    "dateOfBirth": "08/27/1992",	
    "dateJoined": "4/2009",
    "followingCount": 340,	
    "followersCount": 830,
  }


const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            return action.payload;
       },
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;