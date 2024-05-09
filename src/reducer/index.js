import changeTheNumber from "./IncDec";
import numberReducer2 from "./MulDev";
import { combineReducers } from 'redux'

const rootreducer=combineReducers({
    changeTheNumber,numberReducer2
})
export default rootreducer;