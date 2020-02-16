import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Modal from "./common/Modal";
import { EDIT_USER } from "../actions/users";

const ModalBody = styled.div`
  height: 100%;

  h2 {
    text-align: center;
    height: 10%;
    margin: 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  width: 100%;
  padding: 10px 20px;
  overflow: auto;

  input {
    width: 90%;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.grey100};
    border-radius: 4px;
    margin-bottom: 10px;
    background-color: none;
  }

  label {
    margin-bottom: 5px;
  }

  button {
    width: 50%;
    margin: 20px auto 0;
    padding: 10px;
    background-color: ${({ theme }) => theme.green300};
    color: ${({ theme }) => theme.white};
    border-radius: 8px;
    border: none;
  }
`;

const EditModal = ({ editUser, user }) => {
  const history = useHistory();

  if (!user) return null;

  const submitForm = event => {
    event.preventDefault();
    const { id, name, email, city, phone, website, company } = event.target;
    const user = {
      id: id.value,
      name: name.value,
      email: email.value,
      address: { city: city.value },
      phone: phone.value,
      website: website.value,
      company: { name: company.value }
    };

    editUser(user);
    history.goBack();
  };

  return (
    <Modal close={history.goBack}>
      <ModalBody>
        <h2>Edit User</h2>
        <Form onSubmit={submitForm}>
          <input name="id" hidden defaultValue={user.id} />
          <label htmlFor="name">Name</label>
          <input name="name" defaultValue={user.name} />
          <label htmlFor="email">Email</label>
          <input name="email" defaultValue={user.email} />
          <label htmlFor="city">City</label>
          <input name="city" defaultValue={user.address.city} />
          <label htmlFor="phone">Phone</label>
          <input name="phone" defaultValue={user.phone} />
          <label htmlFor="website">Website</label>
          <input name="website" defaultValue={user.website} />
          <label htmlFor="company">Company</label>
          <input name="company" defaultValue={user.company.name} />

          <button type="submit">Submit</button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

const mapDispatchToProp = dispatch => {
  return {
    editUser: user => dispatch({ type: EDIT_USER, user })
  };
};

export default connect(null, mapDispatchToProp)(EditModal);
