import React, {Component} from 'react';
import axios from 'axios';

export default class CreateInvoice extends Component {

    constructor(props) {
        super(props);

        this.onChangeInvoiceDate = this.onChangeInvoiceDate.bind(this);
        this.onChangeInvoiceCustomer = this.onChangeInvoiceCustomer.bind(this);
        this.onChangeInvoiceAccount = this.onChangeInvoiceAccount.bind(this);
        this.onChangeInvoiceProduct = this.onChangeInvoiceProduct.bind(this);
        this.onChangeInvoiceQuantity = this.onChangeInvoiceQuantity.bind(this);
        this.onChangeInvoiceTotal = this.onChangeInvoiceTotal.bind(this);
        this.onChangeInvoicePurchasePrice = this.onChangeInvoicePurchasePrice.bind(this);
        this.onChangeInvoiceProfit = this.onChangeInvoiceProfit.bind(this);
        this.onChangeInvoiceSplit = this.onChangeInvoiceSplit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            invoice_date: '',
            invoice_customer: '',
            invoice_account: '',
            invoice_product: '',
            invoice_quantity: '',
            invoice_total: '',
            invoice_purchase_price: '',
            invoice_profit: '',
            invoice_split: '',
            invoice_completed: false
        }
    }

    onChangeInvoiceDate(e) {
        this.setState({
            invoice_date: e.target.value
        });
    }

    onChangeInvoiceCustomer(e) {
        this.setState({
            invoice_customer: e.target.value
        });
    }

    onChangeInvoiceAccount(e) {
        this.setState({
            invoice_account: e.target.value
        });
    }
    onChangeInvoiceProduct(e) {
        this.setState({
            invoice_product: e.target.value
        });
    }
    onChangeInvoiceQuantity(e) {
        this.setState({
            invoice_quantity: e.target.value
        });
    }
    onChangeInvoiceTotal(e) {
        this.setState({
            invoice_total: e.target.value
        });
    }
    onChangeInvoicePurchasePrice(e) {
        this.setState({
            invoice_purchase_price: e.target.value
        });
    }
    onChangeInvoiceProfit(e) {
        this.setState({
            invoice_profit: e.target.value
        });
    }
    onChangeInvoiceSplit(e) {
        this.setState({
            invoice_split: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Invoice Date: ${this.state.invoice_date}`);
        console.log(`Invoice Customer: ${this.state.invoice_customer}`); 
        console.log(`Invoice Account: ${this.state.invoice_account}`); 
        console.log(`Invoice Product: ${this.state.invoice_product}`); 
        console.log(`Invoice Quantity: ${this.state.invoice_quantity}`); 
        console.log(`Invoice Total: ${this.state.invoice_total}`);
        console.log(`Invoice Profit: ${this.state.invoice_profit}`);
        console.log(`Invoice Split: ${this.state.invoice_split}`);
        console.log(`Invoice Completed: ${this.state.invoice_completed}`);

        const newInvoice = {
            invoice_date: this.state.invoice_date,
            invoice_customer: this.state.invoice_customer,
            invoice_account: this.state.invoice_account,
            invoice_product: this.state.invoice_product,
            invoice_quantity: this.state.invoice_quantity,
            invoice_total: this.state.invoice_total,
            invoice_purchase_price: this.state.invoice_purchase_price,
            invoice_profit: this.state.invoice_profit,
            invoice_split: this.state.invoice_split,
            invoice_completed:this.state.invoice_completed,
        }

        axios.post('http://localhost:4000/invoices/add', newInvoice)
            .then(res => console.log(res.data));

        this.setState({
            invoice_date: '',
            invoice_customer: '',
            invoice_account: '',
            invoice_product: '',
            invoice_quantity: '',
            invoice_total: '',
            invoice_purchase_price: '',
            invoice_profit: '',
            invoice_split: '',
            invoice_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Invoice</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Date: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.invoice_date}
                                onChange={this.onChangeInvoiceDate}
                                />
                    </div>
                    <div className="form-group">
                        <label>Customer: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.invoice_customer}
                                onChange={this.onChangeInvoiceCustomer}
                                />
                    </div>
                    <div className="form-group">
                        <label>Account: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.invoice_account}
                                onChange={this.onChangeInvoiceAccount}
                                />
                    </div>
                    <div className="form-group">
                        <label>Product: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.invoice_product}
                                onChange={this.onChangeInvoiceProduct}
                                />
                    </div>
                    <div className="form-group">
                        <label>Qty: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.invoice_quantity}
                                onChange={this.onChangeInvoiceQuantity}
                                />
                    </div>
                    <div className="form-group">
                        <label>Total: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.invoice_total}
                                onChange={this.onChangeInvoiceTotal}
                                />
                    </div>
                    <div className="form-group">
                        <label>Purchase Price: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.invoice_purchase_price}
                                onChange={this.onChangeInvoicePurchasePrice}
                                />
                    </div>
                    <div className="form-group">
                        <label>Profit: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.invoice_profit}
                                onChange={this.onChangeInvoiceProfit}
                                />
                    </div>
                    <div className="form-group">
                        <label>Split: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.invoice_split}
                                onChange={this.onChangeInvoiceSplit}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Invoice" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}