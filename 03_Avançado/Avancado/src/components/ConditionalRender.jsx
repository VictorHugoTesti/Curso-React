import { useState } from "react"

function ConditionalRender() {

    const [x] = useState(false);

    const [name, setName] = useState("joao")
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso</p>}

        <h1>If</h1>
        {name === "joao"? (
            <div>
                <p>O nome é João</p>
            </div>
        ) : (
            <div>
                <p>O nome NÃO é João</p>
            </div>
        )}
        <button onClick={() => setName("jo")}>Clique aqui!</button>
    </div>
  )
}

export default ConditionalRender