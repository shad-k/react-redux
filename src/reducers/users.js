import { FETCHING_USERS_SUCCESS } from "../actions/users";

export default (state = [], action) => {
  switch (action.type) {
    case FETCHING_USERS_SUCCESS:
      return [...state, ...action.users];
    default:
      return state;
  }
};
