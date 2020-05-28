import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  CLEAR_COUNT,
  UPDATE_COUNT,
} from '../actions/types';

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return state + 1;
    case DECREMENT_COUNT:
      return state - 1;
    case CLEAR_COUNT:
      return 0;
    case UPDATE_COUNT:
      return action.payload;
  }
  return state;
};
