import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { FETCHING_USERS } from "../actions/users";
import User from "../components/User";
import PageLoader from "../components/PageLoader";

const Main = styled.main`
  padding: 20px;
  height: 100%;
  width: 100%;

  h1,
  p {
    text-align: center;
  }
`;

const UsersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const CustomUser = styled(User)`
  width: 100%;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 48%;
  }

  @media screen and (min-width: 1200px) {
    width: 33%;
  }
`;

const UsersPage = ({ users, fetchUsers }) => {
  const { data, loading, error } = users;

  if (!loading && !error && data.length === 0) {
    fetchUsers();
  }

  return (
    <Main>
      <h1>Users</h1>
      <p>Click on the edit button to edit the user's details</p>
      <UsersContainer>
        {loading && <PageLoader />}
        {!loading && data.map(user => <CustomUser key={user.id} user={user} />)}
      </UsersContainer>
    </Main>
  );
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
