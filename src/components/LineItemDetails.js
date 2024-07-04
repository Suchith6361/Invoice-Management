// import React, { Component } from 'react';
// import axios from 'axios';

// class LineItemDetails extends Component {
//   state = {
//     lineItems: [],
//   };

//   componentDidMount() {
//     axios.get('/api/line-items').then(response => {
//       this.setState({ lineItems: response.data });
//     });
//   }

//   render() {
//     const { lineItems } = this.state;
//     return (
//       <div>
//         <h2>Line Item Details</h2>
//         {lineItems.map(item => (
//           <div key={item.id}>
//             <p>Description: {item.description}</p>
//             <p>Amount: {item.amount}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default LineItemDetails;


import React, { Component } from 'react';
import axios from 'axios';

class LineItemDetails extends Component {
  state = {
    lineItems: [],
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/line-items').then(response => {
      this.setState({ lineItems: response.data });
      console.log(response.data);
    });
  }

  render() {
    const { lineItems } = this.state;
    return (
      <div>
        <h2>Line Item Details</h2>
        {lineItems.map(item => (
          <div key={item._id}>
            <p>Description: {item.description}</p>
            <p>Amount: {item.amount}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default LineItemDetails;
