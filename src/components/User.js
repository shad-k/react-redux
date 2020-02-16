import React from "react";
import styled from "styled-components";

import { urlFormatter } from "../utils/url";

const Main = styled.div`
  border-radius: 8px;
  box-shadow: 0 0 4px 0 ${({ theme }) => theme.grey100};
  overflow: hidden;
`;

const Name = styled.h3`
  margin: 0;
  border-bottom: 1px solid ${({ theme }) => theme.grey100};
  padding: 10px;
  text-align: center;
  background-color: ${({ theme }) => theme.white};
`;

const UserDetails = styled.div`
  background-color: ${({ theme }) => theme.blue100};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  min-height: 150px;
`;

const User = ({
  user: { name, email, website, address, phone, company },
  className
}) => {
  return (
    <Main className={className}>
      <Name>{name}</Name>
      <UserDetails>
        <span>{email}</span>
        <span>{address.city}</span>
        <span>{phone}</span>
        <span>
          <a
            href={urlFormatter(website)}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            {website}
          </a>
        </span>
        <span>{company.name}</span>
      </UserDetails>
    </Main>
  );
};

export default User;
