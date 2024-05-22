import Styles from "./Quote.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Quotes = () => {
  const navigate = useNavigate();
  const images = [
    "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?cs=srgb&dl=pexels-freestockpro-3278215.jpg&fm=jpg",
    "https://thumbs.dreamstime.com/b/happy-couple-love-travel-raised-hands-cliff-happy-couple-love-travel-raised-hands-cliff-norway-man-woman-112188598.jpg",
    "https://media.istockphoto.com/id/1363398400/photo/woman-traveler-in-europa-alhambra-in-spain.webp?b=1&s=612x612&w=0&k=20&c=5DPqykL51akClaG4lrFz34RbbbEcHIkC_DNl00GyHSU=",
    "https://eg5viqwfhsw.exactdn.com/uploads/2023/11/AdobeStock_632947529_70res-scaled.jpg?strip=all&lossy=1&ssl=1",
  ];

  const interest = [
    "Adventure & Outdoors",
    "Beaches",
    "Heritage & Cultures",
    "Nature & Landscapes",
    "WildLife & Safari",
    "Wine & Food",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [data, setData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedInterest, setSelectedInterest] = useState("");
  const [travallerCount, setTravellerCount] = useState("");
  const [budget, setBudget] = useState("");
  const [formData, setFormData] = useState({});
  const [openForm, setOpenForm] = useState(false);
  const [duration, setDuration] = useState("");
  const [when, setWhen] = useState("");

  useEffect(() => {
    const updateImageIndex = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const intervalId = setInterval(updateImageIndex, 4000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
    const fetchCounteries = async () => {
      try {
        const countriesUrl =
          "https://crio-location-selector.onrender.com/countries";
        const res = await axios(countriesUrl, {
          Method: "GET",
        });
        const data = await res.data;
        setData((prev) => ({ ...prev, countries: data }));
      } catch (e) {
        console.error(e);
      }
    };
    fetchCounteries();
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleInterestChange = (e) => {
    setSelectedInterest(e.target.value);
  };
  const handleTravellerCountChange = (e) => {
    setTravellerCount(e.target.value);
  };
  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setFormData({
      country: selectedCountry,
      interest: selectedInterest,
      noOfTravelers: travallerCount,
      budgePerPerson: budget,
    });

    navigate("/Thanks");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${images[currentImageIndex]})`,
          transition: "background-image 1s ease-in-out",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={Styles.quotesForm}>
          <form onSubmit={handleForm}>
            <div style={{ fontSize: "18px" }}>Travel Carefree Again</div>
            <div style={{ fontSize: "13px" }}>
              Book your private, custom tour of a lifetime with
            </div>
            <div style={{ fontSize: "13px" }}>100% confidence</div>
            <div>
              <select
                required
                style={{borderRadius: "10px", width: "60%"}}
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                <option value="" disabled>
                  Where do you want to go?
                </option>
                {data.countries?.map((ele, id) => (
                  <option key={id} value={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                style={{borderRadius: "10px", width: "60%"}}
                required
                value={selectedInterest}
                onChange={handleInterestChange}
              >
                <option value="" disabled>
                  Your interest?
                </option>
                {interest.map((ele, id) => (
                  <option key={id} value={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <input
                type="text"
                onChange={(e) => setDuration(e.target.value)}
                placeholder="duration"
                style={{
                  width: "29%",
                  marginRight: "10px",
                  padding: "5px",
                  borderRadius: "10px",
                }}
              />
              <input
                type="text"
                onChange={(e) => setWhen(e.target.value)}
                placeholder="when?"
                style={{ width: "29%", padding: "5px", borderRadius: "10px" }}
              />

              <select
                required
                style={{ marginBottom: "5px", borderRadius:"10px", width:"60%" }}
                value={travallerCount}
                onChange={handleTravellerCountChange}
              >
                <option value="" disabled>
                  No of travelers
                </option>
                <option key={1} value={1}>
                  1 traveler
                </option>
                <option key={2} value={2}>
                  2 travelers
                </option>
                <option key={3} value={3}>
                  3 travelers
                </option>
                <option key={4} value={4}>
                  4 travelers
                </option>
                <option key={5} value={5}>
                  5 travelers
                </option>
                <option key={6} value="5+">
                  5+ travelers
                </option>
              </select>
              <select style={{borderRadius: "10px", width: "60%"}} value={budget} onChange={handleBudgetChange}>
                <option value="" disabled>
                  Budget per person
                </option>
                <option key={1} value={4000}>
                  $4000 - $5000
                </option>
                <option key={2} value={5000}>
                  $5000 - $6000
                </option>
                <option key={3} value={6000}>
                  $6000 - $7000
                </option>
                <option key={4} value={7000}>
                  $7000 - $8000
                </option>
                <option key={5} value={8000}>
                  $8000 - $9000
                </option>
                <option key={6} value={9000}>
                  $9000 - $10000
                </option>
              </select>
            </div>
            <button style={{ margin: "15px", borderRadius: "10px", width:"60%" }} type="submit">
              GET STARTED
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
