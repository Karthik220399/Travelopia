import Styles from "./Login.module.css";
import Header from "./Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginStatus, setLoginStatus] = useState("unsubmitted");
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    let [key, value] = [e.target.name, e.target.value];
    setLoginData({
      ...loginData,
      [key]: value,
    });
  };

  const ApiCall = (e) => {
    e.preventDefault();
    login(loginData);
  };

  const login = async (formData) => {
    const valid = validateInput(formData);
    if (valid) {
      setLoginStatus("submitted");
      try {
        let res = true;

        alert("Logged in successfully");
        setLoginStatus("unsubmitted");
        localStorage.setItem("loggedIn", true);
        navigate("/");
      } catch (e) {
        if (e.response) {
          alert(e.response.data.message);
        } else {
          alert(
            "Something went wrong. Check that the backend is running, reachable and returns valid JSON"
          );
        }
        setLoginStatus("unsubmitted");
      }
    }
  };
  const validateInput = (data) => {
    let msg = "";

    if (!data.username) msg = "Username is a required field";
    else if (!data.password) msg = "Password is a required field";

    if (msg) {
      alert(msg);
      return false;
    } else {
      return true;
    }
  };

  return (
    <div>
      <div className={Styles.formDiv}>
        <form className={Styles.forms} onSubmit={ApiCall}>
          <label>User Name: </label>
          <input
            type="text"
            title="Username"
            name="username"
            required
            value={loginData.username}
            placeholder="Enter Username"
            onChange={handleChange}
          />

          <label>Password: </label>
          <input
            type="password"
            title="password"
            name="password"
            required
            value={loginData.password}
            placeholder="Enter password"
            onChange={handleChange}
          />

          <p style={{ marginBottom: "5px" }}>
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              style={{ color: "orange" ,cursor: "pointer"}}
              
            >
              Register Now
            </span>
          </p>
          <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
          <button type="submit">LOGIN </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
