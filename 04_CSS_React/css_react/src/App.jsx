import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/myComponent'
import Title from './components/Title'

function App() {
  const [count, setCount] = useState(0)

  const n = 15

  const pinkTitle = true;


  return (
    <>
      <div>
        <h1>React com CSS</h1>

        
          <h2>CSS GLOBAL</h2>
          <p>Pasta "index.css"</p>
        
          <h2>CSS de Componente</h2>
          <MyComponent />
        
         <h2
        style={{
          color: "blue",
          fontWeight: "bolder",
          padding: "25px",
          borderTop: "1px dotted blue",
        }}
      >
        Este elemento foi estilizado inline
      </h2>
        <p
          style={{
            fontWeight: "bolder",
            color: "blue"
          }}
        >
          Utilizado em Estilização de Palavras especificas (NÃO RECOMENDADO)!!!
        </p>

        <h2 style={n > 10 ? { color: "purple" } : { color: "magenta" }}>
          CSS Dinamico
        </h2>
        

      <h2 className={pinkTitle ? "pink-title" : "title"}>
        Classe Dinamica
      </h2>

      <h2>
        CSS Modules
      </h2>
      <Title />

        
      </div>
    </>
  )
}

export default App
