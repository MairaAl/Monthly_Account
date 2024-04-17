import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/auth/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        setEmail("");
        setPassword("");
        navigate("/clients");
      })
      .catch((err) => {
        //console.log(err);
        console.log(err);
        setError(err.message);
      });
  };

  return (
    <>
      <h3>Log in</h3>
      <div className="error">{error}</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="font">E-mail </label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter your e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <input type="submit" className="btn btn-primary mt-3" value="Login" />
      </form>
    </>
  );
};

export default UserForm;
