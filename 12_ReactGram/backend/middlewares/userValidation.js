const { body } = require("express-validator")

const userCreateValidation = () => {
    return [
        body("name")
            .isString().withMessage("Nome é Obrigatório!")
            .isLength({min: 3}).withMessage("O nome precisa ter no mínimo 3 caracteres"),
        body("email")
            .isString().withMessage("Email é Obrigatório")
            .isEmail().withMessage("Insira um email válido"),
        body("password")
            .isString().withMessage("Senha é Obrigatória")
            .isLength({min: 6}).withMessage("A senha precisa ter no Mínimo 6 caracteres."),
        body("confirmPassword")
            .isString().withMessage("A confirmação de Senha é Obrigatórioa.")
            .custom((value, {req}) => {
                if(value != req.body.password) {
                    throw new Error("As Senhas não são Iguais!")
                }
                return true;
            }
        ),
    ]
}

const loginValidateion = () => {
    return [
        body("email")
            .isString().withMessage("O email é Obrigatório")
            .isEmail().withMessage("Insira um email Válido"),
        body("password")
            .isString().withMessage("A senha é Obrigatória"),
    ]
}

const userUpdateValidation = () => {
    return [
        body("name")
            .optional()
            .isLength({min:3}).withMessage("O nome precisa de no mínimo 3 caracteres"),
        body("password")
            .optional()
            .isLength({min:6}).withMessage("A senha tem q conter no mínimo 6 caracteres"),
    ]
}

module.exports = {
    userCreateValidation,
    loginValidateion,
    userUpdateValidation,
}