import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  CLEAR_COUNT,
  UPDATE_COUNT,
} from './types';

export const actionIncrementCount = () => {
  return {
    type: INCREMENT_COUNT,
  };
};

export const actionDecrementCount = () => {
  return {
    type: DECREMENT_COUNT,
  };
};

export const actionClearCount = () => {
  return {
    type: CLEAR_COUNT,
  };
};

export const actionUpdateCount = update => {
  return {
    type: UPDATE_COUNT,
    payload: update,
  };
};
