import { useContext, useEffect, useState } from 'react'
import { ChallegsContext } from '../contexts/ChallengsContext';
import styles from '../styles/components/Contdown.module.css'

import {CountdownContext} from '../contexts/CountdownContext'


let countdownTimeout: NodeJS.Timeout;

export function Countdown(){


  const {hasFinishid,isActive,minutes,seconds,startCountdown} = useContext(CountdownContext)
  
    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('')
   
  return(
    <div>
      <div className={styles.CoutdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
          <span>:</span>
        <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
        </div>
        
    </div>

    {hasFinishid && (
      <button
      disabled
      className={styles.CoutdownButton}
     
      >
        Desafio finalizado!!!
      </button>
     
    )} 
    
    {
      !hasFinishid &&
      <button 
    type="button"
     className={!isActive ? styles.CoutdownButton : styles.CoutdownButtonActive}
      onClick={startCountdown} >
      {isActive ?'Abandonar ciclo':'Iniciar teste'}
    </button>
    }
    </div>
    
    
  )
}