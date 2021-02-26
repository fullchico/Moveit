import { useContext } from 'react'
import { ChallegsContext } from '../contexts/ChallengsContext'
import styles from '../styles/components/LevelUpModal.module.css'


export function LevelUpModal(){

  const { level, closeModal } = useContext(ChallegsContext)

  return(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabens</strong>
        <p>Voce alcancou um novo {level}</p>


      <button type="button" onClick={closeModal}>
        <img src="/icons/close.svg" alt="fechar modal"/>
      </button>
      </div>
    </div>
  )
}