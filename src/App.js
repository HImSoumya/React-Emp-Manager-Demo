import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Table from "./components/Table";
import EmpData from "./Data/EmpData";

function App() {
  const [emps, setEmps] = useState(EmpData);
   
  return (
    <div className="App">
      <Header />
      <Form />
      <Table emps={emps} />
    </div>
  );
}

export default App;
