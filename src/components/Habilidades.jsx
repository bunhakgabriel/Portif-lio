import styles from './Habilidades.module.css'

import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap, faNodeJs, faJava } from '@fortawesome/free-brands-svg-icons'


const Habilidades = () => {

    const [scroll, setScroll] = useState(false)

    document.addEventListener('scroll', () => {
        if(window.scrollY > 850){
            setScroll(true);
        } 
    })

  return (
    <section className={styles.habilidades} >
        <h1 className={ scroll ? styles.iconShow : styles.iconHidden } >Habilidades</h1>

        <div className={styles.habilidadesIconsDiv} >
            <div className={ scroll ? styles.iconShow : styles.iconHidden } >
                <h2 className={styles.titleIcon} >HTML5</h2>
                <FontAwesomeIcon icon={faHtml5} size="2xl" className={styles.habilidadesIcons} />
            </div>
            <div className={ scroll ? styles.iconShow : styles.iconHidden } >
                <h2 className={styles.titleIcon} >CSS3</h2>
                <FontAwesomeIcon icon={faCss3Alt} size="2xl" className={styles.habilidadesIcons} />
            </div>
            <div className={ scroll ? styles.iconShow : styles.iconHidden } >
                <h2 className={styles.titleIcon} >JavaScript</h2>
                <FontAwesomeIcon icon={faJs} size="2xl" className={styles.habilidadesIcons} />
            </div>
            <div className={ scroll ? styles.iconShow : styles.iconHidden } >
                <h2 className={styles.titleIcon} >React.js</h2>
                <FontAwesomeIcon icon={faReact} size="2xl" className={styles.habilidadesIcons} />
            </div>
            <div className={ scroll ? styles.iconShow : styles.iconHidden } >
                <h2 className={styles.titleIcon} >Bootstrap5</h2>
                <FontAwesomeIcon icon={faBootstrap} size="2xl" className={styles.habilidadesIcons} />
            </div>
            <div className={ scroll ? styles.iconShow : styles.iconHidden } >
                <h2 className={styles.titleIcon} >Node.js</h2>
                <FontAwesomeIcon icon={faNodeJs} size="2xl" className={styles.habilidadesIcons} />
            </div>
            <div className={ scroll ? styles.iconShow : styles.iconHidden } >
                <h2 className={styles.titleIcon} >Java</h2>
                <FontAwesomeIcon icon={faJava} size="2xl" className={styles.habilidadesIcons} />
            </div>
            <div className={ scroll ? styles.iconShow : styles.iconHidden } >
                <h2 className={styles.titleIcon} >MongoDB</h2>
                <img className={styles.mongoDB} src="./iconeMongoDB.png" alt="" />
            </div>
        </div>

    </section>
  )
}

export default Habilidades