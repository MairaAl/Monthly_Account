import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [typeUser, setTypeUser] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    axios
      .post("http://localhost:8000/api/auth/register", {
        firstName,
        lastName,
        typeUser,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setTypeUser("");
        setError("");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  return (
    <>
      <h3>Register</h3>
      <div className="error">{error}</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div>
          <label>Last name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter your last name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
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
          <label className="font">Type of user </label>
          <select
            className="form-select"
            onChange={(e) => setTypeUser(e.target.value)}
            value={typeUser}
          >
            <option value="Admin">Admin</option>
            <option value="Cliente">Cliente</option>
          </select>
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
        <div>
          <label>Confirm password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary mt-3"
          value="Register"
        />
      </form>
    </>
  );
};

export default RegisterForm;
