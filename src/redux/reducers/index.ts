import {combineReducers} from "redux"
import postListReducer from "./postListReducer"

const reducers = combineReducers({
    postList: postListReducer
})

export default reducers

