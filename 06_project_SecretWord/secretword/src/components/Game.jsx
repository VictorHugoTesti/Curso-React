import { useState, useRef } from 'react'
import styles from './Game.module.css'

const Game = ({
  verifyLetter, 
  pickedWord, 
  pickedCategory, 
  letters, 
  guessedLetters, 
  wrongLetters, 
  guesses, 
  score
}) => {

  const [letter, setLetters] = useState("")
  const letterInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    verifyLetter(letter)

    setLetters("")

    letterInputRef.current.focus()
  }

  return (
    <div className={styles.game}>
      <p className={styles.points}>
        <span>Pontuação: {score}</span>
      </p>
      <h1>Advinhe a Palavra</h1>
      <h3 className={styles.tip}>
        Dica da Palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} Tentativas!!!</p>
      <div className={styles.wordContainer}>
        {letters.map((letter, i) => 
          guessedLetters.includes(letter) ? (
            <span key={i} className={styles.letter}>{letter}</span>
          ) : (
            <span key={i} className={styles.blankSware}></span>
          )
        )}
      </div>
      <div className={styles.letterConainer}>
        <p>Tente adivinhar uma letra:</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name='letter' 
            maxLength={1} 
            required 
            onChange={(e) => setLetters(e.target.value)} 
            value={letter}
            ref={letterInputRef}
          />
          <button>Jogar!</button>
        </form>
      </div>
      <div className={styles.wrongLetterConainer}>
        <p>Letras já Utilizadas</p>
        {wrongLetters.map((letter, i) => (          
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  )
}

export default Game