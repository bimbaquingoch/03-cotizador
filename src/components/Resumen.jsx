import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CotResumen = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 30px 0 0 0;

  > h2 {
    color: var(--numeros-letras-primario);
    font-family: "Slabo 27px", serif;
    letter-spacing: 2px;
    margin-bottom: 10px;
    text-align: center;
  }
  > ul {
    padding: 20px;
    width: 100%;
  }
  > ul li {
    color: var(--numeros-letras-primario);
    display: flex;
    font-weight: bold;
    justify-content: space-between;
    text-transform: capitalize;
  }
`;

const Resumen = ({ datos }) => {
  const { marca, year, plan } = datos;
  if (marca === "" || year === "" || plan === "") return null;
  return (
    <CotResumen>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>
          Marca: <span>{marca}</span>
        </li>
        <li>
          Año: <span>{year}</span>
        </li>
        <li>
          Plan: <span>{plan}</span>
        </li>
      </ul>
    </CotResumen>
  );
};

Resumen.propTypes = { datos: PropTypes.object.isRequired };

export default Resumen;
