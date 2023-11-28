import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../Constants/user.constant";

export const userActionLogin = (details) => (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    setTimeout(() => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: details,
      });
    }, 5000);
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const updateDataAction = (details) => (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    setTimeout(() => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: details,
      });
    }, 5000);
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};
