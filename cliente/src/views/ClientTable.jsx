import { useEffect, useState } from "react";
import axios from "axios";
import ClientList from "../components/ClientList";
import { Link } from "react-router-dom";

const ClientTable = () => {
  const [client, setClient] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");
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
        setError("Please log in to see the data");
      });
  }, [setClient]);

  return (
    <div>
      <div className="error">{error}</div>
      <Link className="link-warning" to={"/login"}>
        Log in
      </Link>
      <br />
      <Link className="link-warning" to={"/clients/addclient"}>
        Add new client
      </Link>
      <h1> Clients List</h1>
      {loaded && <ClientList client={client.clients} />}
      <Link className="link-warning" to={"/login"}>
        Log out
      </Link>
    </div>
  );
};

export default ClientTable;
