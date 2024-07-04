// import React, { Component } from 'react';
// import axios from 'axios';

// class InvoiceDetails extends Component {
//   state = {
//     invoice: {},
//   };

//   componentDidMount() {
//     axios.get('/api/invoice/1').then(response => {
//       this.setState({ invoice: response.data });
//     });
//   }

//   render() {
//     const { invoice } = this.state;
//     return (
//       <div>
//         <h2>Invoice Details</h2>
//         <p>Currency: {invoice.currency}</p>
//         <p>Basic Amount: {invoice.basicAmount}</p>
//         <p>Tax Amount: {invoice.taxAmount}</p>
//         <p>Total Amount: {invoice.totalAmount}</p>
//       </div>
//     );
//   }
// }

// export default InvoiceDetails;


import React, { Component } from 'react';
import axios from 'axios';

class InvoiceDetails extends Component {
  state = {
    invoice: {},
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/invoices/1').then(response => {
      this.setState({ invoice: response.data });
    });
  }

  render() {
    const { invoice } = this.state;
    return (
      <div>
        <h2>Invoice Details</h2>
        <p>Currency: {invoice.currency}</p>
        <p>Basic Amount: {invoice.basicAmount}</p>
        <p>Tax Amount: {invoice.taxAmount}</p>
        <p>Total Amount: {invoice.totalAmount}</p>
      </div>
    );
  }
}

export default InvoiceDetails;
