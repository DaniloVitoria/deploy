import { Router } from "express"


import { usersRoutes } from "./users-routes"
import { sessionsRoutes } from "./sessions-routes"
import { deliveriesRoutes } from "./deliveries-routes"
import { DeliveryLogsRoutes } from "./delivery-logs-routes"

const routes = Router()
routes.use("/users", usersRoutes)
routes.use("/sessions", sessionsRoutes)
routes.use("/deliveries", deliveriesRoutes)
routes.use("/delivery-logs", DeliveryLogsRoutes)


export { routes }

