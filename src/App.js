import "./App.css";
import TodoContextProvider from "./components/context/TodoContext";

import MyRoutes from "./Routes";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <MyRoutes />
      </TodoContextProvider>
    </div>
  );
}

export default App;
