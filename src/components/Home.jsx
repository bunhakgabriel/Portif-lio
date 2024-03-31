import styles from './Home.module.css'

//import  TypeWriterEffect  from 'react-typewriter-effect'
import Typist from 'react-typist-component';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  return (<>
    <section className={styles.home} >

        <div className={styles.avatarMobile} >
          <img src="./sobreMin.png" alt="" />
        </div>  

        <h1 className={styles.typewiter}>

          <Typist typingDelay={100}>
            {/*
            <span className={styles.textBlack}  >Seja Bem-Vindo </span>
            <Typist.Backspace count={15} />
            <Typist.Delay ms={500} />
             */}
            <div>
              <span className={styles.textBlack} >Eu </span> 
              sou Gabriel Bunhak Desenvolvedor 
              <span className={styles.textBlack} > Front-End</span>
            </div>
          </Typist>

        </h1>

        <div className={styles.redesSociais} >
          <a href="https://github.com/bunhakgabriel">
            <div className={styles.containerIcons} >
                <FontAwesomeIcon icon={faSquareGithub} size="2xl" className={styles.icons} />
                <p>GitHub</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/gabriel-de-camargo-bunhak-a1751a1b1/">
            <div className={styles.containerIcons} >
                <FontAwesomeIcon icon={faLinkedin} size="2xl" className={styles.icons} />
                <p>Linkedin</p>
            </div>
          </a>
        </div>

    </section>
    </>
  )
}

export default Home

