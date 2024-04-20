import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function ClientDetails() {
  const [client, setClient] = useState("");
  const [consumo, setConsumo] = useState([]);
  const navigate = useNavigate();
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
    axios
      .get(`http://localhost:8000/api/consumos/`)
      .then((res) => {
        setConsumo(res.data.consumos);
        console.log(res.data.consumos);
      })
      .catch((err) => {
        console.log(err);
        setConsumo([]);
      });
  }, [id]);
  function deleteClient() {
    axios
      .delete(`http://localhost:8000/api/clients/delete/${client._id}`)
      .then((res) => {
        console.log(res);
        navigate("/clients");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function deleteConsumo(consumoId) {
    axios
      .delete(`http://localhost:8000/api/consumos/delete/${consumoId}`)
      .then((res) => {
        console.log(res);
        setConsumo(consumo.filter((item) => item._id !== consumoId));
        navigate(`/clients/${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const totalPrice = consumo.reduce(
    (total, consumoItem) => total + consumoItem.price,
    0
  );

  return (
    <div>
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {consumo.map((consumoItem, index) => (
              <tr key={index}>
                <td>{consumoItem.product}</td>
                <td>{consumoItem.price}</td>
                <td>{new Date(consumoItem.date).toLocaleDateString()}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => deleteConsumo(consumoItem._id)}
                  >
                    Delete
                  </button>
                  <span>-</span>
                  <Link className="btn btn-primary">Edit</Link>
                </td>
              </tr>
            ))}
            <tr>
              <td>Total</td>
              <td>
                <div>{totalPrice}</div>
              </td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <Link className="btn btn-primary m-2" to={`/consumos/addconsumo/${id}`}>
          Add new product
        </Link>
        <Link className="btn btn-primary m-2" to={`/clients`}>
          Back to home
        </Link>
      </div>
      <button className="btn btn-primary" onClick={deleteClient}>
        Delete {client.firstName}
      </button>
    </div>
  );
}

export default ClientDetails;
