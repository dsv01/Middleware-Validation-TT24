import {body} from "express-validator"

function validatorUser(method:string)
{
    switch(method)
    {
        case "createUser":{
            return[
                body("email").exists().withMessage("O campo não pode ser nulo")
                .isLength({min:1})
                .withMessage("O corpo de email deve ser preenchido")
                .isEmail()
                .withMessage('Precisa ser como exemplo@exemplo'),

                body("name").exists().withMessage("O campo não pode ser nulo")
                .isLength({min:1})
                .withMessage("O nome deve ser preenchido")
                .isString()
                .withMessage('Valor deve ser uma string'),

                body("premium").exists().withMessage("O campo não pode ser nulo")
                .isBoolean()
                .withMessage('Valor deve ser um valor booleano'),
            ]
        }
    }
}

export {validatorUser}