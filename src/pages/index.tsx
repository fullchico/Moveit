import Head from 'next/head'
import ChallengeBox from '../components/ChallengeBox'
import { CompletedChallgens } from '../components/CompleteChellagens'
import { Countdown } from '../components/Countdown'
import ExperienceBar from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CountdownProvider } from '../contexts/CountdownContext'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Inicio | move.it</title>
      </Head>


      <ExperienceBar />
      <CountdownProvider>
  {/* envolendo useContext em parte especifica da aplicação, verifique o App.js para comprenção*/}
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
      </CountdownProvider>

    </div>
  )
}
