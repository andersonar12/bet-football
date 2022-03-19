import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const loginUser = () => {
    setUser({ name: "Anderson", logged: true });

    navigate("/home");
  };
  return (
    <div className="text-center">
      <h1>Login</h1>
      <button onClick={() => loginUser()} className="btn btn-primary">
        Iniciar
      </button>
    </div>
  );
};
