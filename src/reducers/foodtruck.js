// import data from 'src/data';
import { FETCH_ALL_FOODTRUCKS  } from 'src/actions/foodtruck';

export const initialState = {
    list: [],
    id: '',
    // search: false,
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'SAVE_FOODTRUCKLIST':
        return {
          ...state,
          list: action.foodtruck,
          // search: true,
        }

      // case FETCH_ALL_FOODTRUCKS :
      //   return {
      //     ...state,
      //     id: action.id,
      //   }
      // default:
      //   return state;
          
    }
  };
  
  export default reducer;
