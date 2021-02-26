import React, { useContext } from 'react'
import { ChallegsContext } from '../contexts/ChallengsContext'
import styles from '../styles/components/ExperienceBar.module.css'

const ExperienceBar = () => {

  const{currentExperience, experienceToNextLevel} = useContext(ChallegsContext)


  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }}/>
        <span className={styles.currentExperience} style={{left: `${percentToNextLevel}%`}}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}

export default ExperienceBar


