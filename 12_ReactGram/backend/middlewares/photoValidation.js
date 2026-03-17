const { body } = require("express-validator")

const photoInsertValidation = () => {
    return [
        body("title")
            .not().equals("undefined").withMessage("O titulo é Obrigatório")
            .isString().withMessage("O titulo é Obrigatório")
            .isLength({ min: 3 }).withMessage("O titulo deve ter pelo menos 3 caracteres"),
        body("image")
            .custom((value, { req }) => {
                if (!req.file) {
                    throw new Error("A imagem é obrigatória")
                }
                return true
            }
            )
    ]
}

const photoUpdateValidation = () => {
    return [
        body("image")
            .optional()
            .custom((value, { req }) => {
                if (!req.file) {
                    throw new Error("A imagem é obrigatória");
                }
                return true;
            }),
        body("title")
            .optional()
            .isString()
            .withMessage("O título é obrigatório")
            .isLength({ min: 3 })
            .withMessage("O nome precisa ter no mínimo 3 caracteres."),
    ];
};

const commentValidation = () => {
    return [body("comment").isString().withMessage("O comentário é obrigatório")];
};

module.exports = {
    photoInsertValidation,
    photoUpdateValidation,
    commentValidation,
}