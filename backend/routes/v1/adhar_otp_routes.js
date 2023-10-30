import express from "express"
import bodyParser from "body-parser"
import { add_adhar_user, addActorToAdharId, get_adhar_users, update_adhar_details } from "../../controllers/adhar_otp_controller.js"


const adhar_otp_router = express.Router()

adhar_otp_router.use(bodyParser.json())

adhar_otp_router.post('/addUser', add_adhar_user)

adhar_otp_router.get('/getadharuser', get_adhar_users)

adhar_otp_router.put('/addactor', addActorToAdharId)

adhar_otp_router.put('/updatedetails', update_adhar_details)

export default adhar_otp_router