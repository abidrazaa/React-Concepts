// If we have multiple reducers, we have to pass them as a single reducer 
// So, combining all the reducers in a single file

import {combineReducers} from "redux"
import updateCount from "./counter"

const rootReducer = combineReducers({
    // pass all the reducers here comma separatedly
    updateCount
})

export default rootReducer;