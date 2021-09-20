import { combineReducers } from 'redux';

import recipesReducer from './trucks';
import userReducer from './user';

// on passe à combineReducers un objet qui a la forme du state voulu
// ici on aura un "compartiment" (propriété) recipes et un user dans le state
// on associe à chaque "compartiment" le reducer qui gère cette portion de state
const rootReducer = combineReducers({
  trucks: recipesReducer,
  user: userReducer,
});

export default rootReducer;
