import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import {Request, Response, NextFunction} from "express"

async function premium(request:Request, response:Response, next:NextFunction)
{
    const {id} = request.params

    try
    {
        const user = await prisma.user.findUnique({
            where: {id: Number(id)}
        })

        if(user?.premium)
            next();
        else
            response.status(401).json({'error': 'Sem autorização'})
    }
    catch(error)
    {
        return response.status(500).json({'error': 'Internal Server Error'});
    }
}

export {premium}