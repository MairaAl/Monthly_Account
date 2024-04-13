import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ConsumoForm = () => {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/consumos/new", {
        name,
        product,
        price,
        date,
      })
      .then((res) => {
        console.log(res);
        setName("");
        setProduct("");
        setDate("");
        setPrice("");
      })
      .catch((err) => {
        //console.log(err);
        console.log(err.message);
        setError(err.data.errors.message);
      });
  };

  return (
    <>
      <h3>New submit</h3>
      <div>{error}</div>
      <form onSubmit={handleSubmit}>
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
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
        <input type="submit" className="btn btn-primary mt-3" value="Add" />
      </form>
      <Link className="btn btn-primary mt-3" to={"/"}>
        Back
      </Link>
    </>
  );
};

export default ConsumoForm;
