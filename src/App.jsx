import './App.css'
import Card from './Card';

function App() {
  const item1 ={
    nome: 'Rick Sanchez',
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
  }
  const item2 ={
    nome: 'Morty Smith',
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'
  }
  const item3 ={
    nome: 'Summer Smith',
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png'
  }
  
  const personagens = [item1,item2,item3]
  

  return (
    <>
      <div className='lista'>
        {
          personagens.map(function(umPersonagem){
            return <Card info={umPersonagem}/>
          })
        }
      </div>
    </>
  )
}

export default App
