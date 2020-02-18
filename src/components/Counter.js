import React, { useReducer } from "react";

import { Button, Container } from "reactstrap";
import "./counter.scss";

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;

    case "INCREASE":
      return { count: state.count + 1 };

    case "DECREASE":
      return { count: state.count - 1 };
  }
};

const Counter = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <div className="count">
        <h1>Count: {state.count} </h1>
      </div>

      <div className="buttons">
        <Button
          onClick={() => dispatch({ type: "INCREASE" })}
          className="counter-button"
        >
          INCREASE
        </Button>

        <Button
          onClick={() => dispatch({ type: "DECREASE" })}
          className="counter-button"
        >
          DECREASE
        </Button>
      </div>
    </Container>
  );
};

export default Counter;
