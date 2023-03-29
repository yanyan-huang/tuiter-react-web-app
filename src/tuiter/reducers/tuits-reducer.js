import { createSlice } from "@reduxjs/toolkit"; 
import tuits from '../tuits/tuits.json';
import {createTuitThunk, findTuitsThunk, updateTuitThunk, deleteTuitThunk} from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
 }


 // do we still need the below two blocks of code?
const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
   };
   
   const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
   }


 const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [createTuitThunk.fulfilled]:
        (state, { payload }) => {
            state.loading = false
            state.tuits.push(payload)
      },  
      [findTuitsThunk.pending]:
         (state) => {
            state.loading = true
            state.tuits = []
      },
      [findTuitsThunk.fulfilled]:
         (state, { payload }) => {
            state.loading = false
            state.tuits = payload
      },
      [findTuitsThunk.rejected]:
         (state, action) => {
            state.loading = false
            state.error = action.error
      },
      [updateTuitThunk.fulfilled]:
        (state, { payload }) => {
            state.loading = false
            const tuitNdx = state.tuits
            .findIndex((t) => t._id === payload._id)
            state.tuits[tuitNdx] = {
            ...state.tuits[tuitNdx],
            ...payload
            }
        },
      [deleteTuitThunk.fulfilled] :
      (state, { payload }) => {
      state.loading = false
      state.tuits = state.tuits
        .filter(t => t._id !== payload)
      },
    },
    reducers: {
        deleteTuit(state, action) {
            const index = state
               .findIndex(tuit =>
                  tuit._id === action.payload);
            state.splice(index, 1);
          },       
        createTuit(state, action) {
            state.unshift({
            ...action.payload,
            ...templateTuit,
            _id: (new Date()).getTime(),
            })
        }
     } // we're not going to use the old reducers anymore??
   });
   

// const tuitsSlice = createSlice({ 
//     name: 'tuits',
//     initialState: tuits,
//     reducers: {
//         deleteTuit(state, action) {
//             const index = state
//                .findIndex(tuit =>
//                   tuit._id === action.payload);
//             state.splice(index, 1);
//           },       
//         createTuit(state, action) {
//             state.unshift({
//             ...action.payload,
//             ...templateTuit,
//             _id: (new Date()).getTime(),
//             })
//         }
//     }
// });


export const { createTuit, deleteTuit } = tuitsSlice.actions; // export reducer function
export default tuitsSlice.reducer;