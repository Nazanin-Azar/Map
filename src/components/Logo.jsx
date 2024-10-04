import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <NavLink to="/">
      <img src="/map.png" alt="Map logo" className={styles.logo} />
    </NavLink>
  );
}

export default Logo;
