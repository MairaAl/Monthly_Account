import "./App.css";
import ConsumoForm from "./components/ConsumoForm";
import { Route, Routes } from "react-router-dom";
import ClientTable from "./views/ClientTable";
import ClientForm from "./views/ClientForm";
import ClientDetails from "./views/ClientDetails";
import MainView from "./views/MainView";
import UpdateClient from "./views/UpdateClient";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/consumos/addconsumo/:id"
          element={<ConsumoForm />}
        ></Route>
        <Route path="/clients/addclient" element={<ClientForm />}></Route>
        <Route path="/login" element={<MainView />} />
        <Route path="/clients" element={<ClientTable />} />
        <Route path="/clients/:id" element={<ClientDetails />} />
        <Route path="/clients/edit/:id" element={<UpdateClient />} />
      </Routes>
    </>
  );
}

export default App;
