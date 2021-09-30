// import data from 'src/data';

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SAVE_FOODTRUCKLIST':
      return {
        ...state,
        list: action.foodtruck,
      }
    default:
      return state;
  }
};

export default reducer;
