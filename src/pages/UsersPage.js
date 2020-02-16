import React from "react";
import { connect } from "react-redux";

import { FETCHING_USERS } from "../actions/users";

const UsersPage = ({ users, fetchUsers }) => {
  if (users.length === 0) {
    fetchUsers();
  }

  return <div>{JSON.stringify(users)}</div>;
};

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch({ type: FETCHING_USERS })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
