import express from "express"
import adhar_otp_router from "./adhar_otp_routes.js"
import prop_id_router from "./prop_id_routes.js"
import dummy_id_router from "./dummy_id_routes.js"
import only_otp_router from "./only_otp_routes.js"

const v1router = express.Router()


v1router.use("/adharotp",adhar_otp_router)

v1router.use('/propid', prop_id_router)

v1router.use('/onlyid', only_otp_router)

v1router.use('/dummy', dummy_id_router)







export default v1router

