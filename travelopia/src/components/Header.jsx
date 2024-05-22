import Styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header({}) {
  const loggedIn = localStorage.getItem("loggedIn");
  const navigate = useNavigate();

  return (
    <header className={Styles.parentDiv}>
         <Link style={{textDecoration:"none", color:"black"}} to="/">
            <div className={Styles.title} >
            <div className={Styles.smallTitle}>Travel with</div>
            <div className={Styles.mainTitle}>Travelopia</div>
            </div>
        </Link>
      <div className={Styles.middleHeader}>
        <div className={Styles.qoute}>
          Private tailor-made journeys of a lifetime
        </div>
        <div style={{ fontSize: "14px" }}>
          Contact now :{" "}
          <span style={{ color: "orange", fontWeight: "bolder" }}>
            1234567890
          </span>
        </div>
      </div>

      <div className={Styles.loginRegisterDiv}>
        <button
          onClick={() => navigate("/quote")}
          style={loggedIn ? { width: "100%",cursor: "pointer" } : null}
        >
          Start Planning
        </button>
        {!loggedIn ? (
          <div style={{display: "flex", flexDirection:"coloumn",justifyContent:"center", alignItems:"center"}}>
            <button
              style={{ marginRight: "5px",cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button style={{cursor: "pointer"}} onClick={() => navigate("/register")}>Register</button>
          </div>
        ) : (
          <button
            onClick={() => {
              localStorage.clear("loggedIn");
              navigate("/");
            }}
            style={{ marginLeft: "10px",cursor: "pointer" }}
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
