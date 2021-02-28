import { useContext } from 'react'
import { ChallegsContext } from '../contexts/ChallengsContext'
import styles from '../styles/components/CompletedChallgens.module.css'


export function CompletedChallgens(){

  const{ challengesCompletad } = useContext(ChallegsContext)

  return(
    <div className={styles.completedChallgensContainer}>
      <span>
        Desafios completos
      </span>

      <span>{challengesCompletad}</span>
    </div>
  )
}