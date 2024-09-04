import { NavLink, NavLinkRenderProps } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const getLinkClass = ({ isActive }: NavLinkRenderProps) =>
    isActive ? `${styles.active} ${styles.link}` : `${styles.link}`;

  return (
      <ul className={styles.navList}>
        <li>
          <NavLink to="/" className={getLinkClass}>
            Main
          </NavLink>
        </li>
        <li>
          <NavLink to="/albums" className={getLinkClass}>
            Albums
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={getLinkClass}>
            About project
          </NavLink>
        </li>
      </ul>
  );
}
