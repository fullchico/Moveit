import Head from 'next/head'

import{GetServerSideProps} from 'next'

import ChallengeBox from '../components/ChallengeBox'
import { CompletedChallgens } from '../components/CompleteChellagens'
import { Countdown } from '../components/Countdown'
import ExperienceBar from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import styles from '../styles/pages/Home.module.css'
import { ChallengesProvider } from '../contexts/ChallengsContext'
import { CountdownProvider } from '../contexts/CountdownContext'

export default function index({ Component, pageProps,level,currentExperience,challengesCompletad,gitName,gitImg }) {

  return (
    <ChallengesProvider
     level={level}
     gitName={gitName}
     gitImg={gitImg}
     currentExperience={currentExperience}
     challengesCompletad={challengesCompletad}        
     >

    <div className={styles.container}>

      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <CountdownProvider>

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
      </CountdownProvider>
    </div>
    
     </ChallengesProvider>
  )
}


export const getServerSideProps:GetServerSideProps = async(ctx)=>{

 
  const {level, currentExperience, challengesCompletad,gitImg,gitName} = ctx.req.cookies
  
  return{
    props:{
      gitName:String(gitName),
      gitImg:String(gitImg),
      level:Number(level),
      currentExperience:Number(currentExperience),
      challengesCompletad:Number(challengesCompletad),
    }
  }
}


// resgatando cookies
