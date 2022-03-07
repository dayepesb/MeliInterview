import { ADD_ITEMS, SET_LOADING } from '../utils/ActionsUtils';

export const setItems = (payload) => async function (dispatch) {
  dispatch({
    type: ADD_ITEMS,
    payload,
  });
};

export const deleteItems = () => ({
  type: ADD_ITEMS,
  payload: [],
});

export const setLoading = (payload) => async function (dispatch) {

  if (typeof payload === 'boolean') {
    dispatch({
      type: SET_LOADING,
      payload,
    });
  }
};
