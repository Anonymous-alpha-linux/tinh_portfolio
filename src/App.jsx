import "./App.css";
import AppContext from "./context/AppContext";
import ToolBarContext from "./context/ToolBarContext";
import Home from "./home";

function App() {
  return (
    <AppContext>
      <ToolBarContext>
        <Home />
      </ToolBarContext>
    </AppContext>
  );
}

export default App;
