import styles from "./Habilidades.module.css";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faBootstrap,
  faJava,
  faAngular
} from "@fortawesome/free-brands-svg-icons";

const Habilidades = () => {
  const [scroll, setScroll] = useState(false);

  document.addEventListener("scroll", () => {
    if (window.scrollY > 850) {
      setScroll(true);
    }
  });

  return (
    <section id="sectionHabilidades" className={styles.habilidades}>
      <h1 className={scroll ? styles.iconShow : styles.iconHidden}>
        Habilidades
      </h1>

      <div className={styles.habilidadesIconsDiv}>
        <div className={scroll ? styles.iconShow : styles.iconHidden}>
          <h2 className={styles.titleIcon}>HTML5</h2>
          <FontAwesomeIcon
            icon={faHtml5}
            size="2xl"
            className={styles.habilidadesIcons}
          />
        </div>
        <div className={scroll ? styles.iconShow : styles.iconHidden}>
          <h2 className={styles.titleIcon}>CSS3</h2>
          <FontAwesomeIcon
            icon={faCss3Alt}
            size="2xl"
            className={styles.habilidadesIcons}
          />
        </div>
        <div className={scroll ? styles.iconShow : styles.iconHidden}>
          <h2 className={styles.titleIcon}>JavaScript</h2>
          <FontAwesomeIcon
            icon={faJs}
            size="2xl"
            className={styles.habilidadesIcons}
          />
        </div>
        <div className={scroll ? styles.iconShow : styles.iconHidden}>
          <h2 className={styles.titleIcon}>PostgreSql</h2>
          <img className={styles.Postgresql} src="https://www.svgrepo.com/show/306591/postgresql.svg" alt="" />
        </div>
        <div className={scroll ? styles.iconShow : styles.iconHidden}>
          <h2 className={styles.titleIcon}>Bootstrap5</h2>
          <FontAwesomeIcon
            icon={faBootstrap}
            size="2xl"
            className={styles.habilidadesIcons}
          />
        </div>
        <div className={scroll ? styles.iconShow : styles.iconHidden}>
          <h2 className={styles.titleIcon}>Angular</h2>
          <FontAwesomeIcon
            icon={faAngular}
            size="2xl"
            className={styles.habilidadesIcons}
          />
        </div>
        <div className={scroll ? styles.iconShow : styles.iconHidden}>
          <h2 className={styles.titleIcon}>Java</h2>
          <FontAwesomeIcon
            icon={faJava}
            size="2xl"
            className={styles.habilidadesIcons}
          />
        </div>
        <div className={scroll ? styles.iconShow : styles.iconHidden}>
          <h2 className={styles.titleIcon}>TypeScript</h2>
          <img className={styles.Typescript} src="https://cdn-icons-png.freepik.com/512/5968/5968566.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
