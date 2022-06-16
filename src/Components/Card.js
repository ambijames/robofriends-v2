import React from 'react';



const Card = ({name,email, id, username}) => {
   return (
      <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-s'>
         <img alt="robots" src={`https://robohash.org/${id}/set_set5?150x150`} />
         <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{username}</p>
         </div>
      </div>
   );
}




export default Card;
