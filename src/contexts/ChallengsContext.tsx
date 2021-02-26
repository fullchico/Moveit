import { createContext, ReactNode, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import challengs from '../../challenges.json'
import { LevelUpModal } from '../components/LevelUpModal';

interface challenge {
  type: 'body' | 'eye',
  description: string,
  amount: number
}

interface ChallegsContextData {
  level: number;
  currentExperience: number;
  challengesCompletad: number;
  activeChallenge: challenge;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeModal: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode

  level: number;
  currentExperience: number;
  challengesCompletad: number;


}


export const ChallegsContext = createContext({} as ChallegsContextData)

export function ChallengesProvider({
  children,
  ...rest
}: ChallengesProviderProps) {

  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
  const [challengesCompletad, setchallengesCompletad] = useState(rest.challengesCompletad ?? 0)

  const [activeChallenge, setActiveChallenge] = useState(null)
  const [isLevelUpModalOpen, setisLevelUpModalOpen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)


  useEffect(() => {
    Notification.requestPermission()
  }, [])

  function levelUp() {
    setLevel(() => level + 1)
    setisLevelUpModalOpen(true)
  }

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('challengesCompletad', String(challengesCompletad))
  }, [level, currentExperience, challengesCompletad])

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challengs.length)

    const challenge = challengs[randomChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play

    if (Notification.permission === 'granted') {
      new Notification('novo desafio!!!', {
        body: `Valendo ${challenge.amount} Xp!`
      })
    }
  }


  function resetChallenge() {
    setActiveChallenge(null)
  }


  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;

      levelUp();
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setchallengesCompletad(challengesCompletad + 1)
  }

  function closeModal(){
    setisLevelUpModalOpen(false)
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
        completeChallenge,
        closeModal
      }}>
      {children}
      { isLevelUpModalOpen && < LevelUpModal/>}
    </ChallegsContext.Provider>
  )
}