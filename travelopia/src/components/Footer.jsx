import Styles from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer () {
  return (
    <footer className={Styles.footerDiv}>
      <div>
        <div className={Styles.title}>COMPANY INFO</div>
        <div>FAQ's</div>
        <div>privacy policy</div>
        <div>Terms & conditions</div>
      </div>
      <div>
        <div className={Styles.title}>GET STARTED</div>
        <div>Contact Us</div>
        <div>Create my trip</div>
      </div>
      <div>
        <div className={Styles.title}>CONNECT</div>
        <div className={Styles.icons}>
          <InstagramIcon /> Instagram
        </div>
        <div className={Styles.icons}>
          <XIcon /> X
        </div>
        <div className={Styles.icons}>
          <FacebookIcon /> Facebook
        </div>
        <div className={Styles.icons}>
          <LinkedInIcon /> LinkedIn
        </div>
        <div className={Styles.icons}>
          <PinterestIcon /> Pinterest
        </div>
      </div>
      <div>
        <div className={Styles.title}>NEWSLETTER</div>
        <button style={{ backgroundColor: "chocolate" }}>Sign Up</button>
      </div>
      <div>
        <div className={Styles.title}>SEARCH</div>
        <input type="text" placeholder="Enter keyword" />
        <button style={{ backgroundColor: "chocolate" }}>Search</button>
      </div>
    </footer>
  );
}
