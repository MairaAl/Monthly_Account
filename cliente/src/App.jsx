import "./App.css";
import ConsumoForm from "./components/ConsumoForm";
import { Route, Routes } from "react-router-dom";
import Update from "./views/Update";
import Details from "./views/Details";
import ClientTable from "./views/ClientTable";
import ClientForm from "./views/ClientForm";
import ClientDetails from "./views/ClientDetails";
import MainView from "./views/MainView";
function App() {
  return (
    <>
      <Routes>
        <Route path="/consumos/addconsumo" element={<ConsumoForm />}></Route>
        <Route path="/clients/addclient" element={<ClientForm />}></Route>
        <Route path="/" element={<MainView />} />
        <Route path="/clients" element={<ClientTable />} />
        <Route path="/consumos/edit/:id" element={<Update />} />
        <Route path="/consumos/:id" element={<Details />} />
        <Route path="/clients/:id" element={<ClientDetails />} />
      </Routes>
    </>
  );
}

export default App;
