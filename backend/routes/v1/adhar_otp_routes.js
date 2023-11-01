import express from "express"
import bodyParser from "body-parser"
import { add_adhar_user, addActorToAdharId, adfs, get_adhar_users, update_adhar_details } from "../../controllers/adhar_otp_controller.js"


const adhar_otp_router = express.Router()

adhar_otp_router.use(bodyParser.json())

adhar_otp_router.post('/add', add_adhar_user)

adhar_otp_router.get('/all', get_adhar_users)

adhar_otp_router.put('/edit', addActorToAdharId)

adhar_otp_router.put('/edit/:id', update_adhar_details)

adhar_otp_router.put('addpdf', adfs);

export default adhar_otp_router