import React from 'react';


const Scroll = (props) => {
   return (
      <div style={{ overflowY: 'Scroll', border: '1px Solid red', height: '700px' }}>
         {props.children}
      </div>
   );
};


export default Scroll;