import { FETCHING_PEOPLE_SUCCESS } from "../actions/people";

export default (state = [], action) => {
  switch (action.type) {
    case FETCHING_PEOPLE_SUCCESS:
      return state;
    default:
      return state;
  }
};
