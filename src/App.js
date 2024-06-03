import "./App.css";
import UseCallback from "./hooks/UseCallback";
import UseEffect from "./hooks/UseEffect";
import UseLayoutEffect from "./hooks/UseLayoutEffect";
import UseMemo from "./hooks/UseMemo";
import UseReducer from "./hooks/UseReducer";
import UseRef from "./hooks/UseRef";

function App() {
  return (
    <div className="App">
      <UseLayoutEffect />
    </div>
  );
}

export default App;
