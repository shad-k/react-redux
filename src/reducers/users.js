import {
  FETCHING_USERS_SUCCESS,
  FETCHING_USERS,
  FETCHING_USERS_FAILED
} from "../actions/users";

const initialState = {
  data: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case FETCHING_USERS:
      newState.loading = true;
      break;
    case FETCHING_USERS_SUCCESS:
      newState.data = [...state.data, ...action.users];
      newState.loading = false;
      break;
    case FETCHING_USERS_FAILED:
      newState.error = action.error;
      newState.loading = false;
      break;
    default:
      break;
  }

  return newState;
};
