import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Mensaje = styled.div`
  align-items: center;
  color: var(--numeros-letras-primario);
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  justify-content: space-evenly;
  text-transform: capitalize;
  flex-wrap: wrap;
  > span {
    margin-right: 10px;
    font-weight: bold;
  }
`;

const Total = ({ cotizacion }) => {
  return (
    <Mensaje>
      Total a pagar <span>{cotizacion}</span>
    </Mensaje>
  );
};

Total.propTypes = { cotizacion: PropTypes.number.isRequired };

export default Total;
