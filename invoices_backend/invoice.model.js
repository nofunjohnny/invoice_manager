const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Invoice = new Schema({
    
    invoice_date: {
        type: String
    },
    invoice_customer: {
        type: String
    },
    invoice_account: {
        type: String
    },

    invoice_product: {
        type: String
    },
    invoice_quantity: {
        type: String
    },
    invoice_total: {
        type: String
    },
    invoice_profit: {
        type: String
    },
    invoice_split: {
        type: String
    },
    invoice_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Invoice', Invoice);