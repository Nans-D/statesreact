import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  let total = number + number2;
  let condition = null;
  let condition2 = null;
  let condition3 = null;
  let condition4 = null;
  if (number <= 0) {
    condition = true;
  }
  if (number >= 11) {
    condition2 = true;
  }
  if (number2 <= 0) {
    condition3 = true;
  }
  if (number2 >= 11) {
    condition4 = true;
  }

  if (total >= 18) {
    condition2 = true;
    condition4 = true;
  }

  return (
    <div className="App">
      <div className="big-container">
        <div className="container">
          <div className="number">{number}</div>
          <div className="buttons">
            <button
              hidden={condition2}
              disabled={condition2}
              onClick={() => {
                setNumber(number + 1);
              }}
            >
              +
            </button>
            <button
              hidden={condition}
              disabled={condition}
              onClick={() => {
                setNumber(number - 1);
              }}
            >
              -
            </button>
          </div>
        </div>
        <div className="container2">
          <div className="number">{number2}</div>
          <div className="buttons">
            <button
              hidden={condition4}
              disabled={condition4}
              onClick={() => {
                setNumber2(number2 + 1);
              }}
            >
              +
            </button>
            <button
              hidden={condition3}
              disabled={condition3}
              onClick={() => {
                setNumber2(number2 - 1);
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
      <div className="add">{total}</div>
    </div>
  );
}

export default App;
