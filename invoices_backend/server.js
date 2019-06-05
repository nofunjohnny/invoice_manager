const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const invoiceRoutes = express.Router();
const PORT = 4000;

let Invoice = require('./invoice.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/invoices', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

invoiceRoutes.route('/').get(function(_req, res) {
    Invoice.find(function(err, invoices) {
        if (err) {
            console.log(err);
        } else {
            res.json(invoices);
        }
    });
});

invoiceRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Invoice.findById(id, function(_err, invoice) {
        res.json(invoice);
    });
});

invoiceRoutes.route('/add').post(function(req, res) {
    let invoice = new Invoice(req.body);
    invoice.save()
        .then(_invoice => {
            res.status(200).json({'invoice': 'invoice added successfully'});
        })
        .catch(_err => {
            res.status(400).send('adding new invoice failed');
        });
});

invoiceRoutes.route('/update/:id').post(function(req, res) {
    Invoice.findById(req.params.id, function(_err, invoice) {
        if (!invoice)
            res.status(404).send('data is not found');
        else
            invoice.invoice_date = req.body.invoice_date;
            invoice.invoice_customer = req.body.invoice_customer;
            invoice.invoice_account = req.body.invoice_account;
            invoice.invoice_product = req.body.invoice_product;
            invoice.invoice_quantity = req.body.invoice_quantity;
            invoice.invoice_total = req.body.invoice_total;
            invoice.invoice_purchase_price = req.body.invoice_purchase_price;
            invoice.invoice_profit = req.body.invoice_profit;
            invoice.invoice_split = req.body.invoice_split;
            invoice.invoice_completed;

            invoice.save().then(_invoice => {
                res.json('Invoice updated');
            })
            .catch(_err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/invoices', invoiceRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});