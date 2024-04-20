import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import UserForm from "../components/UserForm";

const MainView = () => {
  return (
    <div className="row">
      <h1>Restaurant El Ancla</h1>
      <Link to={"/clients"}>Continue as a guest</Link>
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
