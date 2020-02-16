import React from "react";
import { connect } from "react-redux";

const PeoplePage = ({ people, fetchPeople }) => {
  if (people.length === 0) {
    fetchPeople();
  }

  return <div>{JSON.stringify(people)}</div>;
};

const mapStateToProps = state => ({
  people: state.people
});

export default connect(mapStateToProps)(PeoplePage);
