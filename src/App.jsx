import { useState } from 'react'
import phrases from './phrases.json'
import { getItemRandom } from './lib/utils'
import { img1, img2, img3, img4, img5 } from './assets/images'
import './App.css'

const colors = ['#F9A826', '#F26B6B', '#F2D74E', '#A3D8F4', '#A3D8F4']
const images = [img1, img2, img3, img4, img5]

function App () {
  const [phrase, setPhrase] = useState(getItemRandom(phrases))
  const [color, setColor] = useState(getItemRandom(colors))
  const [img, setImg] = useState(getItemRandom(images))
  
  const handleClick = () =>  {
    setPhrase(getItemRandom(phrases))
    setColor(getItemRandom(colors))
    setImg(getItemRandom(images))
  }
  
  const imgUrl = `url('${img}')`

  return (
    <div className='container' style={{ backgroundImage: imgUrl }}>
      
      <div className='card'>
      <h1>{phrase.phrase}</h1>
      <p>-{phrase.author}</p>

      <button onClick={handleClick}>
        ver otra frase
      </button>
    </div>
      
    </div>
  )
}

export default App

