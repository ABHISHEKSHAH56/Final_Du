import { combineReducers } from "redux";
import post from "./reducers/posts";
const rootReducers=combineReducers({
        shop:post
});
export default rootReducers;