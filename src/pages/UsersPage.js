import React from "react";
import { connect } from "react-redux";
import { Route, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

import { FETCHING_USERS } from "../actions/users";
import User from "../components/User";
import PageLoader from "../components/PageLoader";
import EditModal from "../components/EditModal";

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

  const { path } = useRouteMatch();

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
      <Route path={`${path}/edit/:id`}>
        {({ match }) => {
          if (!match) return null;
          const { id } = match.params;
          let userToEdit = data.find(user => user.id === id);

          return <EditModal user={userToEdit} />;
        }}
      </Route>
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
