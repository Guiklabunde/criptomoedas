import styles from './notfound.module.css'
import { Link } from 'react-router-dom'

export function Notfound(){
  return(
    <div className={styles.container}>
      <h1>Erro: 404. Volte para a homepage.</h1><br/><br/>
      <Link to="/">
        Acessar Criptomoedas.
      </Link>
    </div>
  )
}