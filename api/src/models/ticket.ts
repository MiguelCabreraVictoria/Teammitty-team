import { Schema, model } from 'mongoose';

const TicketSchema = new Schema({
    classification: String,
    subclassification: String,
    priority: Number,
    description: String,
    resolution: { 
        whatWasDone: String,
        howWasDone: String,
        whyWasDone: String,
        closureTime: Date, // will be null if ticket is not closed
    },
    isDeleted: { type: Boolean, default: false },
});

export default model('Ticket', TicketSchema);