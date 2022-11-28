import {combineReducers} from "redux"
import postListReducer from "./postListReducer"

const reducers = combineReducers({
    posts: postListReducer
})

export default reducers
export type State = ReturnType<typeof reducers>

