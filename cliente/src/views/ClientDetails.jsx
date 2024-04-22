import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function ClientDetails() {
  const [totalPrice, setTotalPrice] = useState("");
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
        console.log(res.data.consumos);
        const consumosCliente = res.data.consumos.filter(
          (consumo) => consumo.client == id
        );
        setConsumo(consumosCliente);
        console.log(consumosCliente);
      })
      .catch((err) => {
        console.log(err);
        setConsumo([]);
      });
  }, [id]);
  useEffect(() => {
    const totalPrice = consumo.reduce(
      (total, consumoItem) => total + consumoItem.price,
      0
    );
    setTotalPrice(totalPrice);
  }, [consumo]);
  function deleteClient() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
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
    });
  }

  function deleteConsumo(consumoId) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8000/api/consumos/delete/${consumoId}`)
          .then((res) => {
            if (res.status === 200) {
              console.log(res);
              Swal.fire({
                title: "Deleted!",
                text: "The product has been delete",
                icon: "success",
              });
              setConsumo(consumo.filter((item) => item._id !== consumoId));
              navigate(`/clients/${id}`);
            } else {
              console.log(
                "Unexpected successful response during deletion: ",
                res
              );
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }

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
                    className="btn btn-outline-warning"
                    onClick={() => deleteConsumo(consumoItem._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td>Total</td>
              <td>{totalPrice}</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <Link
          className="btn btn-outline-warning m-2"
          to={`/consumos/addconsumo/${id}`}
        >
          Add new product
        </Link>
        <Link className="btn btn-outline-warning m-2" to={`/clients`}>
          Back to home
        </Link>
      </div>
      <button className="btn btn-outline-warning" onClick={deleteClient}>
        Delete {client.firstName}
      </button>
    </div>
  );
}

export default ClientDetails;
