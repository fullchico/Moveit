import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { ChallegsContext } from './ChallengsContext';

// interface
interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinishid: boolean;
  isActive: boolean;
  startCountdown: () => void;
}

interface CountdownProvider {
  children: ReactNode

}

// criando contexto
export const CountdownContext = createContext({} as CountdownContextData)

// corpo do componente envolvido no contexto
export function CountdownProvider({ children }: CountdownProvider) {

  let countdownTimeout: NodeJS.Timeout;

  const { startNewChallenge } = useContext(ChallegsContext)

  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinishid, setHasFinishid] = useState(false)

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinishid(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])


  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  function startCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(!isActive)
    setHasFinishid(false)
    setTime(25*60)
  }

  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinishid,
      isActive,
      startCountdown,
    }}>

      {children}

    </CountdownContext.Provider>
  )

}