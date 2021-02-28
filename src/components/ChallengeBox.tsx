import React, { useContext } from 'react'
import styles from '../styles/components/ChallengeBox.module.css'
import { ChallegsContext } from '../contexts/ChallengsContext'

import { CountdownContext } from '../contexts/CountdownContext'

const ChallengeBox = () => {

const { activeChallenge, resetChallenge, completeChallenge} = useContext(ChallegsContext)

const {startCountdown} = useContext(CountdownContext)

function hadleChallengeSucceded(){
 
  completeChallenge()
  startCountdown()
}

function hadleChallengeFalied(){
  resetChallenge()
  startCountdown()
}

  return (
    <div className={styles.challengeBoxContainer}>

      {
        !activeChallenge ? (
          <div className={styles.challengeNotActive}>
            <strong>
              finalize um ciclo para receber um desafio
        </strong>

            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
          Avance de Level completando desafios
        </p>
          </div>
        ) : <div className={styles.challengeActive}>

            <header>Ganhe {activeChallenge.amount} Xp</header>
            <main>
              <img src={`icons/${activeChallenge.type}.svg`} alt=""/>

              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>

            <footer>
              <button 
              type="button"
              className={styles.challengeFailedButton}
              onClick={hadleChallengeFalied}
              >Falhei</button>
              <button 
              type="button"
              className={styles.challengeSucceedeButton}
              onClick={hadleChallengeSucceded}
              >Completei</button>
            </footer>
          </div>
      }


    </div>
  )
}

export default ChallengeBox
