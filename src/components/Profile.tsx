import React, { useContext } from 'react'
import styles from '../styles/components/Profile.module.css'

// importando o useContext
import {ChallegsContext} from '../contexts/ChallengsContext'


export function Profile(){

  const {level} = useContext(ChallegsContext)

  return(
    <div className={styles.profileContainer}>

      <img src="https://avatars.githubusercontent.com/u/62688167?s=400&u=5ef5b9890d34bd30c2ada7307f8579981c121459&v=4" alt="Diogo Barbosa"/>

      <div>
        <strong>Diogo Barbosa</strong>
        
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {level}
          </p>
      </div>
    </div>
  )
}