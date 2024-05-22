import Styles from "./Register.module.css";
import { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [formStatus, setFormStatus] = useState("unsubmitted");
  let handleChange = (e) => {
    let [key, value] = [e.target.name, e.target.value];
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const register = async (formData) => {
    console.log(formData);

    const valid = validateInput(formData);
    if (valid) {
      setFormStatus("submitted");
      try {
        let res = true;
        alert("Registered Successfully");
        navigate("/login");
        setFormStatus("unsubmitted");
      } catch (e) {
        setFormStatus("submitted");
        console.log(e.response.data);
        if (e.response) {
          alert(e.response.data.message);
        } else {
          alert(
            "Something went wrong. Check that the backend is running, reachable and returns valid JSON"
          );
        }
        setFormStatus("unsubmitted");
      }
    }
  };

  const validateInput = (data) => {
    let msg = "";

    if (!data.username) {
      msg = "Username is a required field";
    } else if (data.username.length < 6) {
      msg = "Username must be at least 6 characters";
    } else if (!data.password) msg = "Password is a required field";
    else if (data.password.length < 6) {
      msg = "Password must be at least 6 characters";
    } else if (data.password !== data.confirmPassword)
      msg = "Passwords do not match";

    console.log(msg);
    if (msg) {
      alert(msg);
      return false;
    } else {
      return true;
    }
  };

  const ApiCall = (e) => {
    e.preventDefault();
    register(formData);
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
            value={formData.username}
            placeholder="Enter Username"
            onChange={handleChange}
          />

          <label>Password: </label>
          <input
            type="password"
            title="password"
            name="password"
            required
            value={formData.password}
            placeholder="Enter password"
            onChange={handleChange}
          />

          <label>Confirm Password: </label>
          <input
            type="password"
            title="confirmPassword"
            name="confirmPassword"
            required
            value={formData.confirmPasswordpassword}
            placeholder="Enter password"
            onChange={handleChange}
          />
          <div  style={{display:"flex", justifyContent:"center", marginTop:"10px"}}>
          <button type="submit"> REGISTER </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
