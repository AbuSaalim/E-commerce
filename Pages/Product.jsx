import React, {useContext} from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrum from '../Components/BreadCrums/BreadCrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const {allProduct} = useContext(ShopContext);
  const {productId} = useParams();
  const product = allProduct.find((e) => e.id === Number(productId));
  return (
    <div className='product'>
       <BreadCrum product={product} />
       <ProductDisplay product={product} />
    </div>
  )
}

export default Product
