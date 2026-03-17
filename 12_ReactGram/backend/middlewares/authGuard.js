const User = require("../models/User")
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET

const authGuard = async (req, resizeBy, next) => {

    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]

    // Check if header has a token
    if (!token) return resizeBy.status(401).json({ errors: ["Acesso Negado!"] })

    // Check if Token is Valid
    try {
        const verified = jwt.verify(token, jwtSecret)

        req.user = await User.findById(verified.id).select("-password")

        next()
    } catch (error) {
        resizeBy.status(401).json({ errors: ["Token Inválido."] })
    }
}

module.exports = authGuard