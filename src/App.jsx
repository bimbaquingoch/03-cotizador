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
  height: 100vh;
  padding: 10px;
`;

const Row = styled.div`
  border: 1px solid black;
  border-radius: 30px;
  box-shadow: 3px 5px 15px 1px black;
  width: 100%;
  @media screen and (min-width: 420px) {
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

const App = () => {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: { marca: "", year: "", plan: "" },
  });
  const { cotizacion, datos } = resumen;
  return (
    <Contenedor>
      <ToastContainer />
      <Row>
        <Header titulo="cotizador de seguros" />
        <ContenedorForm>
          <Formulario setResumen={setResumen} />
          <Resumen datos={datos} />
          {cotizacion !== 0 && <Total cotizacion={cotizacion} />}
        </ContenedorForm>
      </Row>
    </Contenedor>
  );
};

export default App;
