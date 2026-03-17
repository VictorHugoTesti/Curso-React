import { useState } from 'react'
import './App.css'

import city from "./assets/city.jpg"
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

function App() {

  const name="Hugo"
  const [userName] = useState("Maria")

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
    { id: 2, brand: "KIA", color: "Branco", km: 200000 },
    { id: 3, brand: "Renault", color: "Azul", km: 32000 },
  ]
  
  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className='App'>
      <h1>Avançando em React</h1>
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={city} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={userName} />
      <CarDetails brand="Ford" color="Azul" km={10000} newCar={true}/>
      <CarDetails brand="VW" color="Vermelho" km={535} newCar={false}/>
      <CarDetails brand="Fiat" color="Branco" km={0} newCar={true}/>
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}
      <Fragment />
      <Container>
        <p>Conteudo do Container</p>
      </Container>
      <ExecuteFunction myFunction={showMessage} />
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  )
}

export default App
