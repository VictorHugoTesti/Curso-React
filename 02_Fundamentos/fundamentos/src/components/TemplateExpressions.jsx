const TemplateExpressions = () => {

    const name = "Victor"
    const data = {
        age: 31,
        job: "Developer",
    };
    
    return (
        <div>
            <h1>Olá {name}</h1>
            <p>Profissão: {data.job}</p>
            <p>{8 + 8}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    );
}

export default TemplateExpressions