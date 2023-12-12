
import express from 'express'
import { fill_information,get_all,get_owner_details } from '../../controllers/unique_realation_table_controller.js';

const UniqueRelationRoutes = express.Router();
UniqueRelationRoutes.post('/add',fill_information);
UniqueRelationRoutes.get('/getowner',get_owner_details);
UniqueRelationRoutes.get('/all',get_all);

export default UniqueRelationRoutes