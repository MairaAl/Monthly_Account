import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateClient = () => {
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:8000/api/clients/${id}`).then((res) => {
      console.log(res.data);
      setFirstName(res.data.client.firstName);
      setLastName(res.data.client.lastName);
    });
  }, [id]);
  const updateClient = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/clients/update/${id}`, {
        firstName,
        lastName,
      })
      .then((res) => console.log(res), navigate("/clients"));
  };
  return (
    <div>
      <h3>Update a client</h3>
      <form onSubmit={updateClient}>
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
          <label>Last Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter last-name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>

        <input
          type="submit"
          className="btn btn-primary mt-3"
          value="Save changes"
        />
      </form>
      <Link to={`/clients/`}>Back to homepage</Link>
    </div>
  );
};

export default UpdateClient;
