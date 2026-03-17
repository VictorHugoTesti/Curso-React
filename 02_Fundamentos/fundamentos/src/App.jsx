import './App.css'
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions.jsx'
import Events from './components/Events.jsx'

function App() {
  
  return (
    <>
      <div className='App'>
        <h1>Fundamentos do React</h1>
        <FirstComponent />
        <TemplateExpressions />
        <Events />
      </div>
    </>
  )
}

export default App
