import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ClientDetails() {
  const [client, setClient] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/clients/${id}`)
      .then((res) => {
        setClient(res.data.client);
        console.log(res.data.client);
      })
      .catch((err) => {
        console.log(err);
        setClient(null);
      });
  }, [id]);

  return (
    <div>
      <h1>
        {client.firstName} {client.lastName}
      </h1>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Date (mm/dd/yy)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{client.product}</td>
            <td>{client.price}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <Link className="btn btn-primary m-2" to={"/consumos/addconsumo"}>
        Add new product
      </Link>
      <Link className="btn btn-primary m-2" to={`/clients`}>
        Back to home
      </Link>
    </div>
  );
}

export default ClientDetails;
