import { Router } from "express";

import { DeliveryLogsController } from "@/controllers/delivery-logs-controller"

import { ensureAuthenticated } from "@/middlewares/ensure-authenticated"
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization"


const DeliveryLogsRoutes = Router()


const deliveryLogsController = new DeliveryLogsController 



// Essa rota do post apenas o sale irá poder usar
DeliveryLogsRoutes.post("/", 
    ensureAuthenticated,
    verifyUserAuthorization(["sale"]),
    deliveryLogsController.create
    
)

DeliveryLogsRoutes.get(
    "/:delivery_id/show",
    ensureAuthenticated,
    verifyUserAuthorization(["sale", "customer"]),
    deliveryLogsController.show
)



export { DeliveryLogsRoutes }


