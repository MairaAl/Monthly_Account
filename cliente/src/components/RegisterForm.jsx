import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [typeUser, setTypeUser] = useState("");
  const [error, setError] = useState("");
  const [fieldsError, setFieldsError] = useState("");
  const [emailValidator, setEmailValidator] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("The passwords don´t match");
      return;
    }
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !typeUser.trim() ||
      !email.trim() ||
      password.length < 8
    ) {
      setFieldsError(
        "All fields are required, and the password have to have 8 characters minimum"
      );
      return;
    }
    axios
      .post("http://localhost:8000/api/auth/register", {
        firstName,
        lastName,
        typeUser,
        email,
        password,
        confirmPassword,
      })
      .then((res) => {
        if (res.status === 200) {
          navigate("/login");
          console.log(res);
          Swal.fire("You have register successfully");
        } else {
          console.log("Unexpected successful response during logout: ", res);
          setError("An unexpected response occurred during logout.");
        }
        console.log(res);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setTypeUser("");
        setError("");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setEmailValidator("Enter a valid email");
      });
  };

  return (
    <>
      <h3>Register</h3>

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

        <div className="error">{emailValidator}</div>
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
        <div className="error">{fieldsError}</div>
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
        <div className="error">{error}</div>
        <input
          type="submit"
          className="btn btn-outline-warning mt-3"
          value="Register"
        />
      </form>
    </>
  );
};

export default RegisterForm;
