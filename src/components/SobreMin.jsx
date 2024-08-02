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

        <div id={styles.imagem} >
            <img src="./sobreMin.png" alt="" />
        </div>

        <div id={styles.conteudo} >
            <h1 className={styles.displayBlock} >Sobre mim</h1>
            <p>
                Atualmente estou no quarto período de Analise 
                e Desenvolvimento de Sistemas na Faculdade Estácio, sou extremamente apaixonado pela
                programação e atualmente estou estagiando como desenvolvedor Full-Stack 
                Angular e Java. Possuo habilidades sólidas
                em HTML, CSS, JavaScript, TypeScript, Angular, e também possuo conhecimento em algumas
                ferramentas Back-end como Java e PostgreSql.
                Além do Estágio possuo experiência em projetos acadêmicos, projetos de minha autoria e freelances.
            </p>
        </div>

    </section>
  )
}

export default SobreMin



