import styles from './GameOver.module.css'

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h1>GameOver!!</h1>
      <h2>Sua Pontuação Foi: <span>{score}</span></h2>
      <button onClick={retry}>Reiniciar Jogo</button>
    </div>
  )
}

export default GameOver