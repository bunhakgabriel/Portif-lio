import styles from './SobreMin.module.css'

import { useState } from 'react'

const SobreMin = () => {

  const [scrolls, setScrolls] = useState(false)

  document.addEventListener('scroll', () => {
      if(window.scrollY >= 200){
          setScrolls(true)
      }
  })

  return (
    <section id='sobreMin' className={ scrolls ? styles.showSection : styles.hidden } >

        <h1 className={styles.displayNone} >Sobre mim</h1>

        <div id={styles.imagem} className={ scrolls ? styles.showImg : styles.hidden } >
            <img src="./sobreMin.png" alt="" />
        </div>

        <div id={styles.conteudo} className={ scrolls ? styles.showConteudo : styles.hidden } >
            <h1 className={styles.displayBlock} >Sobre mim</h1>
            <p>
                Atualmente estou no terceiro período de Analise 
                e Desenvolvimento de Sistemas na Faculdade Estácio, estou extremamente animado para embarcar
                minha jornada como desenvolvedor front-end, atualmente busco minha primeira
                experiência na área. Durante meu aprendizado desenvolvi habilidades sólidas
                em HTML, CSS, JavaScript, React, e também possuo conhecimento em algumas
                ferramentas Back-end como Node Js, Java (conhecimento acadêmico) e MongoDB.
                Possuo experiência em projetos acadêmicos, projetos de minha autoria e freelances.
            </p>
        </div>

    </section>
  )
}

export default SobreMin



