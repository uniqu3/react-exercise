import _ from 'loadsh';
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    case FETCH_STREAM:
    case CREATE_STREAM:
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
