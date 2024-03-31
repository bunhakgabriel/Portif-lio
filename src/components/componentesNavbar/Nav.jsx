import { useState } from 'react'
import styles from './Nav.module.css'
import { FaBars } from 'react-icons/fa';


const Nav = () => {

    const [scrolls, setScrolls] = useState(false)
    const [menu, setMenu] = useState(false)

    document.addEventListener('scroll', () => {
        if(window.scrollY >= 100 ){
            setScrolls(true)
        } else if (window.scrollY < 100){
            setScrolls(false)
        }
    })

    window.addEventListener('resize', () => {
        if(document.body.clientWidth > 780){
            setMenu(false)
        }
    })

    const showMenu = () => {
        if(!menu){
            setMenu(true)
        } else {
            setMenu(false)
        }
    }

  return (<>
    <header>
        <h1 className={styles.titulo} >
            Gabriel B<span className={styles.title} >{'{}'}</span>nhak
        </h1>
        <ul className={styles.ulMenu}>
            <li><a href="#sectionHome">Inicio</a></li>
            <li><a href="#sobreMin">Sobre min</a></li>
            <li><a href="#sectionHabilidades">Habilidades</a></li>
            <li><a href="#sectionProjetos">Projetos</a></li>
            <li>Contato</li>
        </ul>

        <button className={styles.navIcon} onClick={ () => showMenu() } >
            <FaBars className={styles.menuHamburguer} />
        </button>
    </header>

    {/* 
    <header className={ scrolls ? styles.visible : styles.invisible }>
        <h1 className={styles.titulo} >
            Gabriel B<span className={styles.title} >{'{}'}</span>nhak
        </h1>
        <ul className={styles.ulMenu}  >
            <li>Inicio</li>
            <li>Sobre min</li>
            <li>Habilidades</li>
            <li>Projetos</li>
            <li>Contato</li>
        </ul>

        <button className={styles.navIcon} onClick={ () => showMenu() } >
            <FaBars className={styles.menuHamburguer} />
        </button>
    </header>
    */}

    <div>
        <ul id={styles.ulHamburguer} className={ menu ? styles.showMenuHamburguer : styles.hiddenMenuHamburguer } >
            <li><a href="#sectionHome">Inicio</a></li>
            <li><a href="#sobreMin">Sobre min</a></li>
            <li><a href="#sectionHabilidades">Habilidades</a></li>
            <li><a href="#sectionProjetos">Projetos</a></li>
            <li>Contato</li>
        </ul>
    </div>
    
  </>)
}

export default Nav