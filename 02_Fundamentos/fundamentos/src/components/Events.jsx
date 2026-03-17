const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
    }

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizado com Sucesso</h1>
        }
        else {
            return <h1>Não foi possivel renderizar</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Funcionou")}>Clique Aqui!!!</button>
                <button onClick={() => {
                    if(true) {
                        console.log("Evitar isso")
                    }
                }}>Clique If aqui</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events