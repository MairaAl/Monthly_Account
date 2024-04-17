import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ClientForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/clients/new", {
        firstName,
        lastName,
      })
      .then((res) => {
        console.log(res);
        setFirstName("");
        setLastName("");
        navigate("/clients");
      })
      .catch((err) => {
        //console.log(err);
        console.log(err.message);
        setError(err.data.errors.message);
      });
  };

  return (
    <>
      <h3>New client</h3>
      <div>{error}</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="font">First Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter a name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div>
          <label>LastName</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter last-name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>

        <input type="submit" className="btn btn-primary mt-3" value="Add" />
      </form>
      <Link className="btn btn-primary mt-3" to={"/clients"}>
        Back
      </Link>
    </>
  );
};

export default ClientForm;
