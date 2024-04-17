import { useEffect, useState } from "react";
import axios from "axios";
import ClientList from "../components/ClientList";
import { Link } from "react-router-dom";

const ClientTable = () => {
  const [client, setClient] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/clients/")
      .then((res) => {
        console.log(res.data);
        setClient(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setClient]);
  return (
    <div>
      <Link to={"/clients/addclient"}>Add new client</Link>
      <h1> Clients List</h1>
      {loaded && <ClientList client={client.clients} />}
    </div>
  );
};

export default ClientTable;
