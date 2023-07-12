import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Sidebar />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
