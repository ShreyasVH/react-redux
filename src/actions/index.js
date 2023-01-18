import { counterEvents } from '../events';

export const incrementAction = () => ({
  type: counterEvents.INCREMENT,
  payload: {}
});

export const decrementAction = () => ({
  type: counterEvents.DECREMENT,
  payload: {}
});