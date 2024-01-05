import React from 'react';
import './BreadCrum.css';
import arrowIcon from '../Assets/breadcrum_arrow.png';

const BreadCrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={arrowIcon} alt="" /> Shop <img src={arrowIcon} alt="" /> {product.category} <img src={arrowIcon} alt="" /> {product.name}
    </div>
  )
}

export default BreadCrum
