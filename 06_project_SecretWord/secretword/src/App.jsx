import './App.css'
import {useCallback, useEffect, useState} from 'react'
import {wordsList} from './data/words'
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
    {id: 1, name :"start"},
    {id: 2, name :"game"},
    {id: 3, name :"end"},
  ];

  const guessesQty = 3

function App() {

  const [gamestages, setGameStages] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)

  console.log(words)

  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    const word = words[category][Math.floor(Math.random() * words[category].length)]

    console.log(category, word)
    
    return {category, word}
  }, [words])

  const startGame = useCallback(() => {
    clearLetterStates()

    const {word, category} = pickWordAndCategory()

    let wordletters = word.split("")

    wordletters = wordletters.map((letter) => letter.toLowerCase());
    
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordletters)

    console.log(category, word)
    console.log(wordletters)

    setGameStages(stages[1].name)
  }, [pickWordAndCategory])

  const verifyLetter = (letter) => {

    const normalizedLetter = letter.toLowerCase()

    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return
    }

    if(letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ])
    } else {
        setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ])
      setGuesses((actualGuesses) => actualGuesses -1)
    }

    console.log(guessedLetters)
    console.log(wrongLetters)
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect (() => {

    if(guesses === 0) {
      clearLetterStates()

      setGameStages(stages[2].name)
    }
  }, [guesses])

  useEffect(() => {

    const uniqueLetters = [... new Set(letters)]

    if(guessedLetters.length === uniqueLetters.length) {
      setScore((actualScore) => (actualScore +=100))

      startGame()
    }

    console.log(uniqueLetters)
  }, [guessedLetters, letters, startGame])

  const retry = () => {
    setScore(0)
    setGuesses(guessesQty)
    
    setGameStages(stages[0].name)
  }

  return (
    <>
      <div className='App'>

        {gamestages === "start" && <StartScreen  startGame={startGame} />}
        {gamestages === "game" && <Game 
          verifyLetter={verifyLetter} 
          pickedWord={pickedWord} 
          pickedCategory={pickedCategory} 
          letters={letters} 
          guessedLetters={guessedLetters} 
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />}
        {gamestages === "end" && <GameOver retry={retry} score={score} />}
      </div>
    </>
  )
}

export default App
