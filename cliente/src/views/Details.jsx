import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Details() {
  const [consumo, setConsumo] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/consumos/${id}`)
      .then((res) => {
        setConsumo(res.data.consumo);
        console.log(res.data.consumo);
      })
      .catch((err) => {
        console.log(err);
        setConsumo(null);
      });
  }, [id]);
  const date = new Date(consumo.date);
  const formattedDate = date.toLocaleDateString();
  const updated = new Date(consumo.updatedAt);
  const formattedUpdated = updated.toLocaleDateString();
  return (
    <div>
      <h1>{consumo.name}</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Date (mm/dd/yy)</th>
            <th>Last updated</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{consumo.product}</td>
            <td>{consumo.price}</td>
            <td>{formattedDate}</td>
            <td>{formattedUpdated}</td>
          </tr>
        </tbody>
      </table>
      <Link to={"/consumos"}>Back to home</Link>
    </div>
  );
}

export default Details;
