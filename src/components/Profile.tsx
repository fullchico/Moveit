import React, { useContext } from 'react'
import styles from '../styles/components/Profile.module.css'

// importando o useContext
import {ChallegsContext} from '../contexts/ChallengsContext'


export function Profile(){

  const {level, gitImg,gitName} = useContext(ChallegsContext)

  return(
    <div className={styles.profileContainer}>

      <img src={gitImg} alt={gitName}/>

      <div>
        <strong>{gitName}</strong>
        
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {level}
          </p>
      </div>
    </div>
  )
}