import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import UserForm from "../components/UserForm";
import logo from "../img/logo.jpg";

const MainView = () => {
  return (
    <div className="row">
      <img src={logo} alt="Logo" id="img" />
      <h1>Restaurant El Ancla</h1>
      <Link className="link-warning" to={"/clients"}>
        Continue as a guest
      </Link>
      <div className="col">
        <RegisterForm />
      </div>
      <div className="col">
        <UserForm />
      </div>
    </div>
  );
};

export default MainView;
