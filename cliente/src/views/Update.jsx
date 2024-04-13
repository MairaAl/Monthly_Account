import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8000/api/consumos/${id}`).then((res) => {
      console.log(res.data);
      setName(res.data.consumo.name);
      setProduct(res.data.consumo.product);
      setPrice(res.data.consumo.price);
      setDate(res.data.consumo.date);
    });
  }, [id]);
  const updateConsumo = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/consumos/update/${id}`, {
        name,
        product,
        price,
        date,
      })
      .then((res) => console.log(res));
    navigate("/consumos");
  };
  function deleteClient() {
    axios
      .delete(`http://localhost:8000/api/consumos/delete/${id}`)
      .then((res) => {
        console.log(res);
        navigate("/consumos");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <h3>Edit</h3>

      <form onSubmit={updateConsumo}>
        <div>
          <label className="font">Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter a name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label>Product</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter a product"
            onChange={(e) => setProduct(e.target.value)}
            value={product}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            className="form-control"
            type="number"
            placeholder="Enter the price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            className="form-control"
            type="text"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
        <input type="submit" className="btn btn-primary m-3" value="Edit" />
        <Link className="btn btn-primary m-3" to={"/"}>
          Back
        </Link>
      </form>
      <button className="btn btn-primary" onClick={deleteClient}>
        Delete {name}
      </button>
    </>
  );
};

export default Update;
