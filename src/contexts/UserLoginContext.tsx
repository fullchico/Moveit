import{ createContext, ReactNode} from 'react'


export const UserLoginContext = createContext({})


interface ChallengesProviderProps{
  children: ReactNode
}


export function ChallengesProvider({children}:ChallengesProviderProps){

  function teste(){
    alert("test 123 som!!!")
  }



  return(
    <UserLoginContext.Provider value={{teste}}>
      {children}
    </UserLoginContext.Provider>
  )
}