import React from 'react';
import '../Styles/card.scss';

const Card = ({data}) => {
  
  return (
    <div className='card'>
        <p>{data.Name}</p>
        <p>{data.BranchType}</p>
        <p>{data.DeliveryStatus}</p>
        <p>{data.District}</p>
        <p>{data.State}</p>
    </div>
  )
}

export default Card;