import { takeEvery, call, put } from "redux-saga/effects";

import {
  FETCHING_USERS,
  FETCHING_USERS_SUCCESS,
  FETCHING_USERS_FAILED
} from "../actions/users";
import * as API from "../utils/api";

function* fetchUsers() {
  try {
    const users = yield call(API.fetchUsers);
    yield put({ type: FETCHING_USERS_SUCCESS, users });
  } catch (error) {
    yield put({ type: FETCHING_USERS_FAILED, error: error.message });
  }
}

export default function*() {
  yield takeEvery(FETCHING_USERS, fetchUsers);
}
