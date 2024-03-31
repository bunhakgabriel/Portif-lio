import styles from './Contato.module.css'
import { FaPhone, FaFile } from 'react-icons/fa';

const Contato = () => {
  return (
    <section id='sectionContato' className={styles.contato} >
        <h1>Contatos</h1>

        <div className={styles.divIconesContato} >
            <a href="">            
                <div className={styles.icones} >
                    <FaPhone size={40} />
                    <h3>Telefone</h3>
                    <p>(41) 99672-9097</p>
                </div>
            </a>

            <a href="mailto:bunhakgabriel@gmail.com?subject=bunhakgabriel@gmail.com&body=bunhakgabriel@gmail.com">
                <div className={styles.icones} >
                    <i style={{margin: '10px', fontSize: '2.6em', marginTop: '20px'}} className="fa-solid fa-envelope fa-2xl teste"></i>
                    <h3 style={{paddingTop: '7px'}} >Email</h3>
                    <p>bunhakgabriel@gmail.com</p>
                </div>
            </a>

            <a href="CurriculoGabriel2024.pdf">
                <div className={styles.icones} >
                    <FaFile size={40} />
                    <h3>Curriculo</h3>
                    <p>Vizualizar</p>
                </div>
            </a>
        </div>

    </section>
  )
}

export default Contato