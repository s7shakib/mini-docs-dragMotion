import React from 'react'
import Background from './components/Background'
import Forgrounds from './components/Forgrounds'

const App = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
         <Background />
         
         <Forgrounds />

    </div>
  )
}

export default App