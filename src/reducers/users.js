import {
  FETCHING_USERS_SUCCESS,
  FETCHING_USERS,
  FETCHING_USERS_FAILED,
  USER_UPDATED
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
    case USER_UPDATED:
      const userIndex = newState.data.findIndex(
        user => user.id === action.user.id
      );
      newState.data[userIndex] = { ...action.user };
      break;
    default:
      break;
  }

  return newState;
};
