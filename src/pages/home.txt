import Head from 'next/head'

import{GetServerSideProps} from 'next'

import ChallengeBox from '../components/ChallengeBox'
import { CompletedChallgens } from '../components/CompleteChellagens'
import { Countdown } from '../components/Countdown'
import ExperienceBar from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import styles from '../styles/pages/Home.module.css'

export default function Home() {

  return (
    
    <div className={styles.container}>

      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar />
        <section>
          <div>
            <Profile />
            <CompletedChallgens />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
    </div>
    
  )
}

// resgatando cookies
