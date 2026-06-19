import { body, param, validationResult } from "express-validator";

const validateProduct = [
    body('name')
        .trim()
        .notEmpty().withMessage("El nombre es requerido")
        .isLength({min: 2}).withMessage('El nombre debe tener al menos 2 caracteres'),
    body("price")
        .notEmpty().withMessage("El precio es requerido")
        .isFloat({gt:0}).withMessage("El precio debe ser un numero mayor a 0"),
    body("description")
        .isLength({max: 100}).withMessage("LA description no puede ser mayor a 100 caracteres")
];

const validateId = [
    param("id")
        .notEmpty().withMessage("El id es requerido")
        .isMongoId().withMessage("El ID debe ser un ObjectId válido"),
];

function checkValidation(rules) {
    return async (req, res, next) => {
        const chains = (Array.isArray(rules) ? rules : [rules]).flat(Infinity);
        for (let chain of chains) {
            await chain.run(req);
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array().map((err) => ({
                field: err.path,
                message: err.msg,
                })),
            });
        }
        next();
    };
}

export { checkValidation, validateId, validateProduct };