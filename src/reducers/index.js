import { combineReducers } from 'redux';

import userReducer from './user';
import contactReducer from './contact';
import registerReducer from './register';



// We pass to the combineReducers an object which has the shape of the desired state
// here, we'll have compartment (property) trucks and user in the state
// we associate to each compartment the reducer that handles this part of the state
const rootReducer = combineReducers({
  user: userReducer,
  contact: contactReducer,
  register: registerReducer,
});

export default rootReducer;
