import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Table from "./components/Table";
import EmpData from "./Data/EmpData";

function App() {
  const [emps, setEmps] = useState(EmpData);

  const handleAdd = (newEmp) => {
    setEmps([...emps, {...newEmp, id: emps.length + 100 }]);
  };
  return (
    <div className="App">
      <Header />
      <Form handleAdd={handleAdd} />
      <Table emps={emps} />
    </div>
  );
}

export default App;
