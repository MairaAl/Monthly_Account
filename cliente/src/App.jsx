import "./App.css";
import ConsumoForm from "./components/ConsumoForm";
import { Route, Routes } from "react-router-dom";
import ConsumoTable from "./views/ConsumoTable";
import Update from "./views/Update";
import Details from "./views/Details";
function App() {
  return (
    <>
      <Routes>
        <Route path="/consumos/addconsumo" element={<ConsumoForm />}></Route>
        <Route path="/" element={<ConsumoTable />} />
        <Route path="/consumos" element={<ConsumoTable />} />
        <Route path="/consumos/edit/:id" element={<Update />} />
        <Route path="/consumos/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
