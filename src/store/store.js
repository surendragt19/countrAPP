import rootreducer from "../reducer";
import {createStore} from 'redux';


const store=createStore(rootreducer);

export default store;