// ParentComponent.js:



import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
  render() {
    const dataToSend = 'Hello from Parent';
    return (
      <div>
        <ChildComponent data={dataToSend} />
      </div>
    );
  }
}

export default ParentComponent;
// ________________________________________________




import React from 'react';

class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <p>Data from Parent: {this.props.data}</p>
      </div>
    );
  }
}

export default ChildComponent;





// with functional components

// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    // Define the data you want to pass to the child component
    const dataToSend = 'Hello from Parent Component!';

    return (
        <div>
            <h2>Parent Component</h2>
            {/* Pass data to the ChildComponent via props */}
            <ChildComponent data={dataToSend} />
        </div>
    );
}

export default ParentComponent;

// ChildComponent.js
import React from 'react';

const ChildComponent = (props) => {
    // Receive data from the parent component via props
    const receivedData = props.data;

    return (
        <div>
            <h2>Child Component</h2>
            {/* Display the received data */}
            <p>Data from Parent: {receivedData}</p>
        </div>
    );
}

export default ChildComponent;
