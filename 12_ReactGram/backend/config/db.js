const mongoose = require("mongoose")
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

// connection
const conn = async () => {
    try {
        const dbConn = await mongoose.connect(
             `mongodb+srv://${dbUser}:${dbPassword}@cluster-reactgram.awsp9kb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-ReactGram`
        )

        console.log("Conectou ao Banco!")

        return dbConn
    } catch (error) {
        console.log(erro)
     }
}

conn()

module.exports = conn