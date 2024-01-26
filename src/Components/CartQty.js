// import "./styles.css";
// import React from "react";
// import { useState } from "react";

// export default function App() {
//   const [qty, setQty] = useState(0);

//   return (
//     <div>
//       <h1>Qty: {qty}</h1>
//       <button onClick={() => setQty(qty + 1)}>+</button>
//       <button
//         onClick={() => {
//           qty && setQty(qty - 1);
//         }}
//       >
//         -
//       </button>
//     </div>
//   );
// }
import { useState } from "react";
export default function CartQty() {
  const [count, setCount] = useState(0);
  function inc() {
    setCount(count + 1);
  }
  function dec() {
    setCount(count - 1);
  }
  return (
    <>
      <h1>Quantity : {count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </>
  );
}

// export default Cartqty

