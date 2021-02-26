import {  createContext, ReactNode, useEffect, useState } from 'react'

import challengs from '../../challenges.json'

interface challenge{
  type: 'body' | 'eye',
  description:string,
  amount:number
}

interface ChallegsContextData{
  level:number;
  currentExperience:number;
  challengesCompletad:number;
  activeChallenge: challenge;
  experienceToNextLevel:number;
  levelUp: ()=> void;
  startNewChallenge: ()=>void;
  resetChallenge:()=>void;
  completeChallenge:()=>void;
}

interface ChallengesProviderProps{
  children: ReactNode
}


export const ChallegsContext = createContext({} as ChallegsContextData)

export function ChallengesProvider({children}:ChallengesProviderProps) {

  const [level, setLevel] = useState(1);
  const [ currentExperience, setCurrentExperience]  = useState(0)
  const[challengesCompletad, setchallengesCompletad] =useState(0)

  const [ activeChallenge, setActiveChallenge ] = useState(null)

  const experienceToNextLevel = Math.pow((level+1)*4,2)


  useEffect(()=>{
    Notification.requestPermission()
  },[])

  function levelUp() {
    setLevel(() => level + 1)
  }


  function startNewChallenge(){
    const randomChallengeIndex = Math.floor(Math.random() * challengs.length)

    const challenge = challengs[randomChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play

    if(Notification.permission === 'granted'){
      new Notification('novo desafio!!!',{
        body:`Valendo ${challenge.amount} Xp!`
      })
    }
  }


  function resetChallenge(){
    setActiveChallenge(null)
  }


  function completeChallenge(){
    if(!activeChallenge){
      return;
    }

    const {amount} = activeChallenge
    
    let finalExperience = currentExperience + amount;

    if( finalExperience >= experienceToNextLevel){
      finalExperience = finalExperience - experienceToNextLevel;
      
      levelUp();
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setchallengesCompletad(challengesCompletad + 1)
  }

  return (
    <ChallegsContext.Provider
     value={{
        level, 
        levelUp,
        currentExperience,
        startNewChallenge,
        challengesCompletad,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge
         }}>
        {children}
    </ChallegsContext.Provider>
  )
}