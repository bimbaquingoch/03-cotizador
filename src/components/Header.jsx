import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ContenedorHeader = styled.div`
  background-color: #26c6da;
  border-radius: 30px 30px 0 0;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;

const TextoHeader = styled.h1`
  font-family: "Slabo 27px", serif;
  font-size: 2rem;
  margin: 0;
  text-align: center;
  text-transform: capitalize;
`;

const Header = ({ titulo }) => {
  return (
    <ContenedorHeader>
      <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>
  );
};

Header.propTypes = { titulo: PropTypes.string.isRequired };

export default Header;
