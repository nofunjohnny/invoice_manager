import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Invoice = props => (
    <tr>
        <td className={props.invoice.invoice_completed ? 'completed' : ''}>{props.invoice.invoice_date}</td>
        <td className={props.invoice.invoice_completed ? 'completed' : ''}>{props.invoice.invoice_customer}</td>
        <td className={props.invoice.invoice_completed ? 'completed' : ''}>{props.invoice.invoice_account}</td>
        <td className={props.invoice.invoice_completed ? 'completed' : ''}>{props.invoice.invoice_product}</td>
        <td className={props.invoice.invoice_completed ? 'completed' : ''}>{props.invoice.invoice_quantity}</td>
        <td className={props.invoice.invoice_completed ? 'completed' : ''}>{props.invoice.invoice_total}</td>
        <td className={props.invoice.invoice_completed ? 'completed' : ''}>{props.invoice.invoice_profit}</td>
        <td className={props.invoice.invoice_completed ? 'completed' : ''}>{props.invoice.invoice_split}</td>
        
        <td>
            <Link to={"/edit/"+props.invoice._id}>Edit</Link>
        </td>
    </tr>
)

export default class InvoicesList extends Component {

    constructor(props) {
        super(props);
        this.state = {invoices: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/invoices/')
            .then(response => {
                this.setState({invoices: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/invoices/')
        .then(response => {
            this.setState({todos: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })   
    }

    invoiceList() {
        return this.state.invoices.map(function(currentInvoice, i) {
            return <Invoice invoice={currentInvoice} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Invoices</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Customer</th>
                            <th>Account</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Profit</th>
                            <th>Split</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.invoiceList() }
                    </tbody>
                </table>
            </div>
        )
    }
}