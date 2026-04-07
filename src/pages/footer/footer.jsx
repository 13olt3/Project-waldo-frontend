import styles from "./Footer.module.css";
import { Link } from "react-router";

function Footer() {
  const links = [
    { name: "First Challenge", path: "/firstpreround" },
    {
      name: "Scoreboard",
      path: "/scoreboard",
    },
  ];

  return (
    <div className={styles.footer}>
      {links.map((eachLink) => {
        return (
          <div key={eachLink.name}>
            <Link to={eachLink.path}>{eachLink.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
export default Footer;
