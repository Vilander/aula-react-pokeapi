import './App.css'
import Card from './Card';
import Audio from './Audio';
import Logo from './Logo';
import Video from './Video';
import personagens from './pokedex.json';

function App() {
 

  return (
    <>
      <div className='logo'><Logo /></div>
      <div className='audio'><Audio /></div>
      <div className='lista'>
        {
          personagens.map(function (umPersonagem) {
            return <Card key={umPersonagem.id} info={umPersonagem} />
          })
        }
      </div>
      <div className='video'><Video /></div>

    </>
  )
}

export default App
