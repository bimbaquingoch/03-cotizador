import { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { calcularMarca, obtenerDiferenciaYear, obtenerPlan } from "../helpers";
import PropTypes from "prop-types";

const LabelMarca = styled.label`
  align-items: center;
  color: var(--numeros-letras-primario);
  flex: 0 0 100px;
  padding: 0 10px;
  text-transform: capitalize;
`;

const Option = styled.option`
  text-transform: capitalize;
`;

const SelecContainer = styled.div({
  backgroundColor: "var(--background-select)",
  borderRadius: "30px",
  boxShadow: "2px 2px 5px 1px",
  display: "flex",
  height: "3em",
  lineHeight: "3",
  marginBottom: "20px",
  position: "relative",
  overflow: "hidden",
  width: "100%",
  "::after": {
    content: '"\\25BC"',
    position: "absolute",
    top: "0",
    right: "0",
    padding: "0 1em",
    background: "#f9f9f9",
    cursor: "pointer",
    pointerEvents: "none",
    transition: "0.25s all ease",
  },
  ":hover::after": { color: "#23b499" },
});

const SelectForm = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: var(--background-select);
  border: none;
  box-shadow: none;
  color: var(--numeros-letras-primario);
  cursor: pointer;
  flex: 1;
  font-size: 1rem;
  outline: 0;
  padding: 0.5rem;

  ::-ms-expand {
    display: none;
  }
`;

const Middle = styled.div`
  margin-bottom: 30px;
  text-align: center;
  width: 100%;
  h1 {
    margin-bottom: 10px;
  }
`;
const LabelRadio = styled.label`
  align-items: center;
  color: var(--numeros-letras-primario);
  cursor: pointer;
  padding: 0 10px;
  position: relative;
  text-transform: capitalize;
`;

const SpanRadio = styled.span``;
const RadioButton = styled.input`
  opacity: 0;
  position: absolute;

  + ${SpanRadio} {
    font-family: "Material Icons";
    color: var(--numeros-letras-primario);
    border-radius: 10px;
    padding: 10px;
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
  }
  &:checked + ${SpanRadio} {
    border: 5px solid #4285f4;
  }
`;

const Heading2 = styled.h2`
  color: var(--numeros-letras-primario);
  margin-bottom: 25px;
  text-align: center;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const Cotizarbtn = styled.button`
  padding: 20px 60px;
  outline: none;
  background-color: var(--react-text-color);
  border: none;
  border-radius: 5px;
  box-shadow: 0 9px var(--gradient-back);
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  transition: 150ms all ease;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    box-shadow: 0 5px #95a5a6;
    transform: translateY(4px);
  }
`;

const Formulario = ({ setResumen }) => {
  const initialState = { marca: "", year: "", plan: "" };
  const [datos, setDatos] = useState(initialState);
  const { marca, year, plan } = datos;
  const marcas = ["americano", "europeo", "asiatico"];
  const anios = [
    2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012,
    2011, 2010,
  ];
  // leer el formulario y guardar en el State
  const obtenerInfo = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      toast.warn("Todos los campos son obligatorios");
      return;
    }

    // una base de 2000
    let resultado = 2000;
    // obtener diferencia de años
    const diferencia = obtenerDiferenciaYear(year);
    // por cada año restar el 3% de la base
    resultado -= (diferencia * 3 * resultado) / 100;
    // americano +15%
    // asiatico +5%
    // europeo +30%
    resultado = calcularMarca(marca) * resultado;
    // basico +20%
    // completo +50%

    const incrementoPlan = obtenerPlan(plan);
    // redondear
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    setResumen({ cotizacion: Number(resultado), datos });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <SelecContainer>
        <LabelMarca htmlFor="">marca</LabelMarca>
        <SelectForm name="marca" id="" value={marca} onChange={obtenerInfo}>
          <Option value="">--Seleccione--</Option>
          {marcas.map((item) => (
            <Option key={item} value={item}>
              {item}
            </Option>
          ))}
        </SelectForm>
      </SelecContainer>

      <SelecContainer>
        <LabelMarca htmlFor="">año</LabelMarca>
        <SelectForm name="year" id="" value={year} onChange={obtenerInfo}>
          <Option value="">--Seleccione--</Option>
          {anios.map((item) => (
            <Option key={item} value={item}>
              {item}
            </Option>
          ))}
        </SelectForm>
      </SelecContainer>

      <Heading2>Escoge un Plan</Heading2>
      <Middle>
        <LabelRadio>
          <RadioButton
            type="radio"
            name="plan"
            value="basico"
            checked={plan === "basico"}
            onChange={obtenerInfo}
          />
          <SpanRadio>basico</SpanRadio>
        </LabelRadio>

        <LabelRadio>
          <RadioButton
            type="radio"
            name="plan"
            value="completo"
            checked={plan === "completo"}
            onChange={obtenerInfo}
          />
          <SpanRadio>completo</SpanRadio>
        </LabelRadio>
      </Middle>
      <Cotizarbtn type="submit">cotizar</Cotizarbtn>
    </FormContainer>
  );
};

Formulario.propTypes = { setResumen: PropTypes.func.isRequired };

export default Formulario;
