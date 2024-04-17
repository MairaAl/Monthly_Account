import RegisterForm from "../components/RegisterForm";
import UserForm from "../components/UserForm";

const MainView = () => {
  return (
    <div className="row">
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
