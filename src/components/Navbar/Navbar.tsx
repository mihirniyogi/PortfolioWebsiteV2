import styles from "./Navbar.module.scss";

const navLinks = [
  {
    title: "about",
    href: "#about",
  },
  {
    title: "projects",
    href: "#projects",
  },
  {
    title: "contact",
    href: "#contact",
  },
];

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        {navLinks.map((link) => (
          <li key={link.title}>
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
      <a className={styles.btn} href="">
        resume
      </a>
    </nav>
  );
};

export default Navbar;
