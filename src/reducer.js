import { combineReducers } from "redux";
import exampleSlice from './pages/home/example-slice' 

const rootReducer = combineReducers({
    example: exampleSlice
})

export default rootReducer;