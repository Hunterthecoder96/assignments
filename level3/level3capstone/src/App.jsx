import { useState } from 'react'
import Header from './Components/Header'
import Meme from './Components/Meme'
import Memegenerated from './Components/memeGenerated'


const memeGenerated = post.map((item,index) =>
  <memeGenerated 
  createdMeme={item.}
  />
)
function App() {
  return (
    <div>
        <Header />
        <Meme />
        {memeGenerated}
    </div>
)
}
export default App
