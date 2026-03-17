import styles from './StartScreen.module.css'

const StartScreen = ({startGame}) => {
  


  return (
    <div className={styles.start}>
      <h1>Secret Word</h1>
      <p>Clique no Botão para Iniciar</p>
      <button onClick={startGame}>Iniciar Game</button>
    </div>
  )
}

export default StartScreen