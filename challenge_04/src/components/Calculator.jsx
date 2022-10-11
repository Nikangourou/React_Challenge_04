import { useState, useEffect, useReducer } from "react";
import {Title} from '../Styles/Global';

const initialState = { total: 0, num: 0, operations: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "setNumber":
      const { value } = action;
      const num = !isNaN(state.num) ? parseInt(state.num + "" + value) : value;

      return {
        ...state,
        total: 0,
        num: num,
        operations: [...state.operations, value],
      };

    case "addition":
      return {
        ...state,
        num: '+',
        operations: [...state.operations, "+"],
      };

    case "subtraction":
      return {
        ...state,
        num: '-',
        operations: [...state.operations, "-"],
      };

    case "multiplication":
      return {
        ...state,
        num: '*',
        operations: [...state.operations, "*"],
      };

    case "total":
      return {
        ...state,
        num: eval(state.operations.join("")),
        total: eval(state.operations.join("")),
      };

    case "reset":
      return {
        total: 0,
        num: 0,
        operations: [],
      };

    default:
      return state;
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleClickNum(key) {
    dispatch({
      type: "setNumber",
      value: key,
    });
  }

  function KeybordNumerique() {
    const keybord = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    return keybord.map((key) => (
      <button
        key={key}
        name={key}
        value={key}
        onClick={() => handleClickNum(key)}
      >
        {key}
      </button>
    ));
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 20,
        }}
      >
        <p>[{state.num}]</p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 50px)",
          marginBottom: 20,
        }}
      >
        <KeybordNumerique />
      </div>

      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
        }}
      >
        <button onClick={() => dispatch({ type: "addition" })}>[+]</button>
        <button onClick={() => dispatch({ type: "subtraction" })}>[-]</button>
        <button onClick={() => dispatch({ type: "multiplication" })}>
          [*]
        </button>
        <button onClick={() => dispatch({ type: "total" })}>[=]</button>
        <button onClick={() => dispatch({ type: "reset" })}>[Reset]</button>
      </div>
      <Title>CALCULATOR</Title> 
    </div>
  );
};

export default Calculator;
