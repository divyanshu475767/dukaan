import React from 'react';
import './productSingle.css';
import { useParams} from 'react-router-dom';
import cartContext from '../store/cart-context';
import { useContext } from 'react';

const ProductSingle = () => {
  const params = useParams();
  const ctx = useContext(cartContext);

  const product = ctx.products.find(item=> item.id == params.productId);
  console.log(product);
 
  return (
    <div className='main-one'>
    <h2>{product.title}</h2>
    <ul className='images'>
      {product.detailsImages.map(img=>{
        return <li>
          <img src={img} className='ime' alt='must'/>
        </li>
      })}
    </ul>

    <p>{product.review}</p>
    
    
    </div>
   
  )
}

export default ProductSingle
