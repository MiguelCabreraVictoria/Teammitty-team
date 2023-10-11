import { Router } from "express";
import * as TicketCtrl from '../controllers/tickets.controller'
import { GeneralAuth } from "../middlewares/RolesAuth";
import { TokenValidation } from "../middlewares/authJwt";

const router = Router();

router.get('/', GeneralAuth, TicketCtrl.getTickets);

router.get('/:id', GeneralAuth, TicketCtrl.getTicket);

router.post('/', TokenValidation, TicketCtrl.createTicket);

router.put('/:id', TicketCtrl.updateTicket);

router.delete('/:id', TicketCtrl.deleteTicket);


export default router;