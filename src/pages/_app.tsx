import '../styles/global.css'


import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  const [ level, setLevel] = useState(1)

  function levelUp(){

    setLevel(() => level +1)
  }


  return (
  // metodo para utilizar useContext envolvendo a aplicação no context

 
      <Component {...pageProps} />
   


  )
}

export default MyApp
