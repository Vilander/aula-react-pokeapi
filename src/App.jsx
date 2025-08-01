import './App.css'
import Card from './Card';

function App() {
  const item1 = {
    id: '#1',
    nome: 'Bulbassauro',
    tipo: 'Planta/Venenoso',
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
  }
  const item2 = {
    id: '#2',
    nome: 'Ivysaur',
    tipo: 'Planta/Venenoso',
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'
  }
  const item3 = {
    id: '#3',
    nome: 'Venusaur',
    tipo: 'Planta/Venenoso',
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png'
  }

  const item4 = {
    id: '#4',
    nome: 'Charmander',
    tipo: 'Fogo',
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
  }

  const item5 = {
    id: '#5',
    nome: 'Charmeleon',
    tipo: 'Fogo',
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png'
  }

  const item6 = {
    id: '#6',
    nome: 'Charizard',
    tipo: 'Fogo',
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png'
  }

  const item7 = {
    id: '#7',
    nome: 'Squirtle',
    tipo: 'Água',
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
  }

  const item8 = {
    id: '#8',
    nome: 'Wartortle',
    tipo: 'Água',
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png'
  }

  const item9 = {
    id:'#9',
    nome: 'Blastoise',
    tipo: 'Água',
    foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png'
    }

  const personagens = [item1, item2, item3,item4,item5,item6,item7,item8,item9]


  return (
    <>
      <div className='lista'>
        {
          personagens.map(function (umPersonagem) {
            return <Card info={umPersonagem} />
          })
        }
      </div>
    </>
  )
}

export default App
