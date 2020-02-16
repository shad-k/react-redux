import { takeEvery, call, put } from "redux-saga/effects";

import {
  FETCHING_USERS,
  FETCHING_USERS_SUCCESS,
  FETCHING_USERS_FAILED,
  EDIT_USER,
  USER_UPDATED
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

function* editUser(action) {
  try {
    const user = yield call(API.updateUser, action.user);
    yield put({ type: USER_UPDATED, user });
  } catch (error) {
    console.log(error);
  }
}

export default function*() {
  yield takeEvery(FETCHING_USERS, fetchUsers);
  yield takeEvery(EDIT_USER, editUser);
}
