import { connect } from "react-redux";

import "./Intervalo.css";
import React from "react";
import Card from "./Card";
import { setMin, setMax } from "../store/actions/numeros";

const Intervalo = (props) => {
  const { min, max } = props;
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={(e) => props.setMin(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => props.setMax(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setMin(newMin) {
      const action = setMin(newMin);
      dispatch(action);
    },
    setMax(newMax) {
      const action = setMax(newMax);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
