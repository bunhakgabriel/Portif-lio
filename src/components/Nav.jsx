import { useState } from 'react'
import styles from './Nav.module.css'

const Nav = () => {

    const [scrolls, setScrolls] = useState(false)

    document.addEventListener('scroll', () => {
        if(window.scrollY >= 100 ){
            setScrolls(true)
        } else if (window.scrollY < 100){
            setScrolls(false)
        }
    })

  return (<>
    <header>
        <h1 className={styles.titulo} >
            Gabriel B<span className={styles.title} >{'{}'}</span>nhak
        </h1>
        <ul>
            <li>Inicio</li>
            <li>Sobre min</li>
            <li>Habilidades</li>
            <li>Projetos</li>
            <li>Contato</li>
        </ul>
    </header>

    <header className={ scrolls ? styles.visible : styles.invisible }>
        <h1 className={styles.titulo} >
            Gabriel B<span className={styles.title} >{'{}'}</span>nhak
        </h1>
        <ul>
            <li>Inicio</li>
            <li>Sobre min</li>
            <li>Habilidades</li>
            <li>Projetos</li>
            <li>Contato</li>
        </ul>
    </header>
    
  </>)
}

export default Nav