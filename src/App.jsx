import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Resumen from "./components/Resumen";
import Total from "./components/Total";

const Contenedor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 10px;
  @media screen and (min-width: 420px) {
    height: 100vh;
  }
`;

const Row = styled.div`
  border-radius: 30px;
  box-shadow: 3px 5px 15px 1px black;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  @media screen and (min-width: 420px) {
    margin-top: 0;
    width: 80%;
  }

  @media screen and (min-width: 770px) {
    width: 500px;
  }
`;

const ContenedorForm = styled.div`
  background-color: var(--background-body);
  border-radius: 0px 0px 30px 30px;
  padding: 3rem;
`;

const BtnLimpiar = styled.button`
  background-color: var(--react-text-color);
  border: none;
  border-radius: 5px;
  box-shadow: 0 9px var(--gradient-back);
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
  outline: none;
  padding: 20px 60px;
  text-align: center;
  transition: 150ms all ease;
  width: 100%;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    box-shadow: 0 5px #95a5a6;
    transform: translateY(4px);
  }
`;

const App = () => {
  const initialState = {
    cotizacion: 0,
    datos: { marca: "", year: "", plan: "" },
  };
  const [resumen, setResumen] = useState(initialState);
  const { cotizacion, datos } = resumen;
  return (
    <Contenedor>
      <ToastContainer />
      <Row>
        <Header titulo="cotizador de seguros" />
        <ContenedorForm>
          <Formulario setResumen={setResumen} />
          <Resumen datos={datos} />
          {cotizacion !== 0 && (
            <>
              <Total cotizacion={cotizacion} />
              <BtnLimpiar
                onClick={() => {
                  setResumen(initialState);
                }}
              >
                Limpiar
              </BtnLimpiar>
            </>
          )}
        </ContenedorForm>
      </Row>
    </Contenedor>
  );
};

export default App;
