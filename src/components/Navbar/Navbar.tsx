import styles from "./Navbar.module.scss";
import { FaExternalLinkAlt } from "react-icons/fa";

const navLinks = [
  { title: "Projects", href: "#projects" },
  { title: "Experience", href: "#experience" },
  { title: "Contact", href: "#contact" },
  { title: "Resume", href: "#resume", icon: <FaExternalLinkAlt /> },
];

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        {navLinks.map((link) => (
          <li key={link.title}>
            <a href={link.href}>
              {link.title}
              {" "}
              {link.icon && <span className={styles.icon}>{link.icon}</span>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
