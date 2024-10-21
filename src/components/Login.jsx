import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "admin" && password === "admin") {
      navigate("/products");
      localStorage.setItem("isAuthenticated", "true");
    } else {
      alert("Campos incorrectos");
    }
  };
  return (
    <div className="w-full justify-between">      
      <h1 className="text-[32px] mb-6 text-white">Iniciar sesión</h1>
      <form action="login" onSubmit={handleSubmit}>
        <label className="mb-[4px] block">
          Username:&nbsp;&nbsp;
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-3"
          />
        </label>
        <br />
        <label htmlFor="">
          Password:&nbsp;&nbsp;
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3"
          />
        </label>
        <br />
        <br />
        <button type="submit">Iniciar </button>
      </form>
      </div>
  );
};

export default Login;
