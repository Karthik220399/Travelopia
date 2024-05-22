import Styles from "./RandomForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RandomForm({ state }) {
  const [isPopupOpen, setIsPopupOpen] = useState(state);
  const navigate = useNavigate();

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className={Styles.parent}>
      {isPopupOpen && (
        <div className={Styles.popup} onClick={togglePopup}>
          <div
            className={Styles.popupContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={Styles.closeButton} onClick={togglePopup}>
              &times;
            </button>
            <h2>Almost There!</h2>
            <h4>As you have not logged in we need bit more info</h4>
            <form>
              <div className={Styles.formGroup}>
                {/* <label htmlFor="name">Name:</label> */}
                <input
                  required
                  type="text"
                  placeholder="Enter you Name"
                  id="name"
                  name="name"
                />
              </div>
              <div className={Styles.formGroup}>
                {/* <label htmlFor="email">Email:</label> */}
                <input
                  required
                  type="email"
                  placeholder="Enter you Email"
                  id="email"
                  name="email"
                />
              </div>
              <div className={Styles.formGroup}>
                {/* <label htmlFor="Ph">PH:</label> */}
                <input
                  required
                  type="number"
                  placeholder="Enter you phone number"
                  id="number"
                  name="number"
                />
              </div>
              <div className={Styles.formGroup}>
                <button
                  onClick={() => navigate("/thanks")}
                  className={Styles.button}
                  type="submit"
                >
                  GET MY QUOTE
                </button>
                <p style={{ marginTop: "10px" }}>Are you excited?</p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomForm;
