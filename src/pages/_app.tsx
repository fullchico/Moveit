import '../styles/global.css'
import { ChallengesProvider } from '../contexts/ChallengsContext'
import { CountdownProvider } from '../contexts/CountdownContext'
import { GetServerSideProps } from 'next'


function MyApp({ Component, pageProps,level,currentExperience,challengesCompletad,gitName,gitImg }) {

  
  return (
  // metodo para utilizar useContext envolvendo a aplicação no context 
    <ChallengesProvider
     level={level}
     gitName={gitName}
     gitImg={gitImg}
     currentExperience={currentExperience}
     challengesCompletad={challengesCompletad}        
     >
        <CountdownProvider>
       <Component {...pageProps} />
        </CountdownProvider>
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

export default MyApp
