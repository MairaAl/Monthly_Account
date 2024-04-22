import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
        console.log(err);
        setError("Please enter a valid e-mail and password or register");
      });
  };
  const handleLogout = () => {
    logoutUser();
  };

  const logoutUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/logout"
      );
      localStorage.removeItem("user");
      if (response.status === 200) {
        navigate("/login");
        console.log(response);
        Swal.fire("Logged out");
      } else {
        console.log("Unexpected successful response during logout: ", response);
        setError("An unexpected response occurred during logout.");
      }
    } catch (err) {
      console.log("Error: ", err);
    }
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

        <input
          type="submit"
          className="btn btn-outline-warning mt-3"
          value="Login"
        />
      </form>
      <button onClick={handleLogout} className="btn btn-outline-warning mt-3">
        Log out
      </button>
    </>
  );
};

export default UserForm;
