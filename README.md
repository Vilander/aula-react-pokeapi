# 📘 Pokédex React

Este projeto, desenvolvido durante aula do curso *técnico de informática para internet do Senac*, é uma **Pokédex interativa** desenvolvida com **React** e **CSS**, onde são exibidos cards de Pokémon com informações como **nome**, **ID**, **tipo** e **imagem oficial**. É ideal para praticar conceitos básicos de componentes, props, estilização condicional e manipulação de listas no React.

## 💡 Funcionalidades

- Exibição de diversos Pokémon em formato de **card**.
- Estilização dinâmica de acordo com o **tipo do Pokémon** (ex: Fogo, Água, Planta/Venenoso, etc).
- Organização responsiva com **grid layout**.
- Integração de **áudio**, **vídeo** e **logotipo** na interface.
- Design visual agradável com **cores temáticas e gradientes** nos cards.

## 🧱 Tecnologias utilizadas

- [React](https://reactjs.org/)
- CSS (sem bibliotecas externas)
- JavaScript

## 📁 Estrutura do Projeto

📦 src/
├── App.jsx # Componente principal que renderiza toda a aplicação
├── App.css # Estilos gerais do layout e organização
├── Card.jsx # Componente de card individual para cada Pokémon
├── Card.css # Estilos visuais personalizados para cada tipo de Pokémon
├── pokedex.json # Lista com dados dos Pokémon (ID, nome, tipo e imagem)
├── Logo.jsx # Componente que exibe a logo da Pokédex
├── Audio.jsx # Componente para tocar trilha sonora ou efeito sonoro
├── Video.jsx # Componente que incorpora vídeo na interface


## 🖼️ Exemplo de Card

Cada Pokémon é exibido com:
- ID: `#001`
- Nome: `Bulbasaur`
- Tipo: `Planta/Venenoso`
- Imagem oficial vinda da [PokeAPI](https://pokeapi.co/)

As classes CSS são geradas dinamicamente com base no tipo do Pokémon. Exemplo:
```jsx
<div className={`card planta-venenoso`}>
  <h2>#001</h2>
  <h3>Bulbasaur</h3>
  <h4>Planta/Venenoso</h4>
  <img src="..." />
</div> 
```

## 🎨 Estilização Dinâmica
O arquivo Card.css define diferentes cores e gradientes com base nas combinações de tipo, como:

```css

.card.fogo {
  background-color: #ffccbc;
  color: #d84315;
}

.card.agua-voador {
  background: linear-gradient(90deg, #bbdefb 0%, #b2ebf2 50%);
  color: #01579b;
}
```

## ▶️ Como rodar o projeto
#### Clone o repositório:

git clone https://github.com/Vilander/aula-react-pokeapi.git

#### Instale as dependências:

npm install

#### Inicie o servidor local:


npm run dev
Acesse em http://localhost:5173/

## 🧠 Aprendizados
Como trabalhar com props em componentes React

Manipulação e renderização de listas

Estilização com base em valores dinâmicos

Organização de componentes reutilizáveis

Aplicação de design temático com CSS puro



## 🧑‍💻 Autor

Desenvolvido por Vilander