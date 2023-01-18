import store from '../../store';
import { incrementAction, decrementAction } from '../../actions';

export const increment = () => {
  store.dispatch(incrementAction());
};

export const decrement = () => {
  store.dispatch(decrementAction());
};