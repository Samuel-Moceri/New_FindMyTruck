import axios from 'axios';
import { FETCH_TRUCKS } from '../actions/trucks';

const ajax = (store) => (next) => (action) => {
  if (action.type === FETCH_TRUCKS) {
    axios.get('TO DO')
      .then((response) => {
        // handle success
        store.dispatch({
          type: 'SAVE_TRUCKS',
          trucks: response.data,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // always executed
      });
  }
  next(action);
};

export default ajax;
