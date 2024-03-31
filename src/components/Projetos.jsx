import styles from './Projetos.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap, faNodeJs, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Projetos = () => {

    const [scroll0, setScroll0] = useState(false)
    const [scroll1, setScroll1] = useState(false)
    const [scroll2, setScroll2] = useState(false)
    const [scroll3, setScroll3] = useState(false)

    document.addEventListener('scroll', () => {
        console.log(window.scrollY)
        if(window.scrollY > 1450){
            setScroll0(true)
        }
        if(window.scrollY > 2050){
            setScroll1(true)
        }
        if(window.scrollY > 2550){
            setScroll2(true)
        }
        if(window.scrollY > 3050){
            setScroll3(true)
        }
    })

  return (
    <section id='sectionProjetos' className={styles.projetos} >
        <h1>Projetos</h1>

        <div id={styles.financasProject} className={ scroll0 ? styles.projectRightShow : styles.projectRightHidden } >

            <div className={styles.financasImg} >
                <img src="./financas.jpeg" alt="" />
            </div>
            <div className={styles.conteudoFinancas} >
                <h3>Finanças</h3>
                <p>
                    Projeto de um site de finanças ficticío aplicado pelo professor
                    Jamilton Damasceno, foi desenvolvido com o objetivo de aprimorar os 
                    conhecimentos em Web Design Responsivo utilizando o framework Bootstrap 5.
                </p>
                <div className={styles.icones} >
                    <FontAwesomeIcon icon={faBootstrap} size="2xl"/>
                    <FontAwesomeIcon icon={faHtml5} size="2xl" />
                </div>
                <div className={styles.deploy} >
                    <a href="https://financasprojectsite.netlify.app/">Vizualizar</a>
                    <a href="https://github.com/bunhakgabriel/Projeto-Bootstrap">
                        <FontAwesomeIcon style={{width:'100%', height:'100%'}} icon={faSquareGithub} size="2xl" />
                    </a>
                </div>

            </div>

        </div>

        <div id={styles.spotifyProject} className={ scroll1 ? styles.projectRightShow : styles.projectRightHidden } >
            <div className={styles.spotifyImg} >
                <img src="./spotify.jpeg" alt="" />
            </div>

            <div className={styles.conteudoSpotify} >
                <h3>Spotify clone</h3>  
                <p>
                    Projeto de um site de finanças ficticío aplicado pelo professor
                    Jamilton Damasceno, foi desenvolvido com o objetivo de aprimorar os 
                    conhecimentos em Web Design Responsivo utilizando o framework Bootstrap 5.
                </p>

                <div className={styles.icones} >
                    <FontAwesomeIcon icon={faBootstrap} size="2xl"/>
                    <FontAwesomeIcon icon={faHtml5} size="2xl" />
                </div>

                <div className={styles.deploy} >
                    <a href="https://spotifyprojectsite.netlify.app/">Vizualizar</a>
                    <a href="https://github.com/bunhakgabriel/CloneSpotify">
                        <FontAwesomeIcon style={{width:'100%', height:'100%'}} icon={faSquareGithub} size="2xl" />
                    </a>
                </div>

            </div>
        </div>

        <div id={styles.agendaProject} className={ scroll2 ? styles.projectRightShow : styles.projectRightHidden } >
            <div className={styles.agendaImg} >
                <img src="./agenda.jpeg" alt="" />
            </div>

            <div className={styles.conteudoAgenda} >  
                <h3>Agenda</h3>
                <p>
                    Projeto de uma agenda de contatos aplicado pelo professor
                    Jamilton Damasceno, foi desenvolvido com foco em NodeJs utilizando o pacote
                    express para o gerenciamento de rotas, e também o uso do no-sql MongoDB para
                    guardar os dados.
                </p>

                <div className={styles.icones} >
                    <FontAwesomeIcon icon={faHtml5} size="2xl" />
                    <FontAwesomeIcon icon={faCss3Alt} size="2xl"/>
                    <FontAwesomeIcon icon={faJs} size="2xl"/>
                    <FontAwesomeIcon icon={faNodeJs} size="2xl"/>
                </div>

                <div className={styles.deploy} >
                    <a href="https://agenda-node-o4eq.onrender.com/">Vizualizar</a>
                    <a href="https://github.com/bunhakgabriel/ContactConect">
                        <FontAwesomeIcon style={{width:'100%', height:'100%'}} icon={faSquareGithub} size="2xl" />
                    </a>
                </div>

            </div>
        </div>

        <div id={styles.secretWordProject} className={ scroll3 ? styles.projectRightShow : styles.projectRightHidden } >
            <div className={styles.secretWordImg} >
                <img src="./secretWord.jpeg" alt="" />
            </div>

            <div className={styles.conteudoSecretWord} >  
            <h3>Secret Word</h3>
                <p>
                    Projeto de um jogo de advinhação de palavras aplicado pelo professor
                    Jamilton Damasceno, foi desenvolvido com o foco em React.js e o uso do
                    pacote React Router para a aplicação do conceito de SPA(single page aplication) .
                </p>

                <div className={styles.icones} >
                    <FontAwesomeIcon icon={faHtml5} size="2xl"/>
                    <FontAwesomeIcon icon={faCss3Alt} size="2xl" />
                    <FontAwesomeIcon icon={faJs} size="2xl" />
                    <FontAwesomeIcon icon={faReact} size="2xl" />
                </div>

                <div className={styles.deploy} >
                    <a href="https://secret-word-bice.vercel.app/">Vizualizar</a>
                    <a href="https://github.com/bunhakgabriel/SecretWord">
                        <FontAwesomeIcon style={{width:'100%', height:'100%'}} icon={faSquareGithub} size="2xl" />
                    </a>
                </div>

            </div>
        </div>

    </section>
  )
}

export default Projetos