import Head from 'next/head'

import{GetServerSideProps} from 'next'

import ChallengeBox from '../components/ChallengeBox'
import { CompletedChallgens } from '../components/CompleteChellagens'
import { Countdown } from '../components/Countdown'
import ExperienceBar from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CountdownProvider } from '../contexts/CountdownContext'
import styles from '../styles/pages/Home.module.css'
import { ChallengesProvider } from '../contexts/ChallengsContext'




export default function Home(props) {

  return (
    <ChallengesProvider
     level={props.level}
     currentExperience={props.currentExperience}
     challengesCompletad={props.challengesCompletad}        
     >
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
    </ChallengesProvider>
  )
}

// resgatando cookies
export const getServerSideProps:GetServerSideProps = async(ctx)=>{

 
  

  const {level, currentExperience, challengesCompletad } = ctx.req.cookies
  
  return{
    props:{
      level:Number(level),
      currentExperience:Number(currentExperience),
      challengesCompletad:Number(challengesCompletad),
    }
  }
}
