import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const ConsumoForm = () => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/consumos/new/${id}`, {
        product,
        price,
        date,
      })
      .then((res) => {
        console.log(res);
        setProduct("");
        setDate("");
        setPrice("");
        navigate(`/clients/${id}`);
      })
      .catch((err) => {
        //console.log(err);
        console.log(err.message);
        setError(err.message);
      });
  };

  return (
    <>
      <h3>New product</h3>
      <div>{error}</div>
      <form onSubmit={handleSubmit}>
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
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
        <input
          type="submit"
          className="btn btn-outline-warning mt-3 "
          value="Add"
        />
      </form>
      <Link className="btn btn-outline-warning mt-3 " to={`/clients/${id}`}>
        Back
      </Link>
    </>
  );
};

export default ConsumoForm;
