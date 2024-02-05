import "./App.css";
import Page from "./component/Page";
import Table from "./component/Table";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="main_div">
        <Routes>
          <Route path="/" element={<Table/>}/>
          <Route path="/user/:id" element={<Page/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
