import { useReducer } from "react";
import { Container, Calculette, Screen } from "../Styles/Global";
import {
  KeybordeNumeriqueContainer,
  KeybordeOperationContainer,
  Keybord,
  Button,
  ButtonOperation,
  ButtonReset,
  ButtonEqual,
} from "../Styles/Button";

const initialState = {num: [], operations: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "setNumber":
      const { value } = action;
      const num = !isNaN(state.num) ? parseInt(state.num + "" + value) : value;

      return {
        ...state,
        num: num,
        operations: [...state.operations, value],
      };

    case "addition":
      return {
        ...state,
        num: "+",
        operations: [...state.operations, "+"],
      };

    case "subtraction":
      return {
        ...state,
        num: "-",
        operations: [...state.operations, "-"],
      };

    case "multiplication":
      return {
        ...state,
        num: "*",
        operations: [...state.operations, "*"],
      };

    case "total":
      let total;
      if (state.num === "+" || state.num === "-" || state.num === "*") {
        // remove the last element of the array if it is an operation
        let tmp = [...state.operations.slice(0, -1)];
        total = eval(tmp.join(""));
      } else {
        total = eval(state.operations.join(""));
      }

      return {
        ...state,
        num: total,
        operations: [total],
      };

    case "reset":
      return {
        num: "",
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
      <Button
        key={key}
        name={key}
        value={key}
        onClick={() => handleClickNum(key)}
      >
        {key}
      </Button>
    ));
  }

  return (
    <Container>
      <Calculette>
        <Screen>{state.num}</Screen>
        <Keybord>
          <KeybordeNumeriqueContainer>
            <KeybordNumerique />
            <ButtonEqual onClick={() => dispatch({ type: "total" })}>
              =
            </ButtonEqual>
          </KeybordeNumeriqueContainer>

          <KeybordeOperationContainer>
            <ButtonReset onClick={() => dispatch({ type: "reset" })}>
              C
            </ButtonReset>
            <ButtonOperation onClick={() => dispatch({ type: "addition" })}>
              +
            </ButtonOperation>
            <ButtonOperation onClick={() => dispatch({ type: "subtraction" })}>
              -
            </ButtonOperation>
            <ButtonOperation
              onClick={() => dispatch({ type: "multiplication" })}
            >
              x
            </ButtonOperation>
          </KeybordeOperationContainer>
        </Keybord>
      </Calculette>
    </Container>
  );
};

export default Calculator;
