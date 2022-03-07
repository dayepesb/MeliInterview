import {
  ADD_ITEMS,
  SET_LOADING,
} from '../utils/ActionsUtils';

const INITIAL_STATE = {
  user: {},
  items: [],
  categories: [],
  loading: false,
};

// eslint-disable-next-line default-param-last
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEMS:
      return {
        ...state,
        items: action.payload.items,
        categories: action.payload.categories,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
