import Styles from "./Thanks.module.css";

export default function Thanks() {
  return (
    <div style={{display: "flex", justifyContent:"center", margin:"25px 10px 25px 10px"}}>
    <div >
      <img
        className={Styles.picture} 
        alt="background"
        src="https://media.istockphoto.com/id/1397892955/photo/thank-you-message-for-card-presentation-business-expressing-gratitude-acknowledgment-and.jpg?s=612x612&w=0&k=20&c=7Lyf2sRAJnX_uiDy3ZEytmirul8pyJWm4l2fxiUtdvk="/>
      </div>
      <div className={Styles.parDiv}>
        <p style={{ marginBottom: "25px", marginTop: "20px" }}>
          Your Dream Trip is Underway!
        </p>
        <p style={{ marginBottom: "25px" }}>
          We appreciate you sharing your travel plans. If your interests and
          indicated budget match with our ability to craft the perfect trip, one
          of our travel experts will be in touch with you shortly.
        </p>
        <p style={{ marginBottom: "25px" }}>
          In the mean time, click below to see some of our recommended tours
          that may match your interests.
        </p>
      </div>
    </div>
  );
}
