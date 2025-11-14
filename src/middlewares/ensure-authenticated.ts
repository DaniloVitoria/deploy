import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

import { authconfig } from "@/configs/auth"
import { AppError } from "@/utils/AppError"


// sub é o id do usuario
interface TokenPayload {
    role: string
    sub: string
}



function ensureAuthenticated(request: Request,
    response: Response, 
    next: NextFunction
){

    try {

        const authHeader = request.headers.authorization


        if(!authHeader){
            throw new AppError("JWT token not found", 401)
        }

        // se recebe assim: Bearer 3424345325325
        const [, token] = authHeader.split(" ")

        const { role, sub: user_id } = verify(token, authconfig.jwt.secret) as TokenPayload

        request.user = {
            id: user_id,
            role,
        }

        return next()

        
    } catch (error) {
        throw new AppError("Invalid JWT token", 401)
    }


}



export { ensureAuthenticated }



