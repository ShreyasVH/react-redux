import { counterEvents } from '../events';
import { copyObject } from "../utils";

const initialState = {
  count: 0
};

const CounterReducer = (state = initialState, action) => {
  const newState = copyObject(state);
  switch (action.type) {
    case counterEvents.INCREMENT:
      newState.count = newState.count + 1;

      state = newState;
      break;
    case counterEvents.DECREMENT:
      if (newState.count > 0) {
        newState.count = newState.count - 1;
      }

      state = newState;
      break;
  }
  return state;
};

export default CounterReducer;