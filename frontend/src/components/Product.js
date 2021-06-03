import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';
/*
type rfc tap to create function
*/
export default function Product(props) {
    const {product} = props;
    return (
        <div>
            <div key={product._id} className="card">
            {/*
            use Link instead because anker href refresh after clicked  
            <a href={'/products/'+product._id}>
            <img className="medium" src={product.image} alt={product.name} />
            </a> */}
            <Link to={`/product/${product._id}`}>
                <img className="medium" src={product.image} alt={product.name} />
            </Link>

            <div className="card-body">
            {/* <a href={'/products/'+product._id}>
                <h2>{product.name}</h2>
            </a> */}
            <Link to={`/product/${product._id}`}>
                <h2>{product.name}</h2>
            </Link>
            
            <Rating rating={product.rating} numReviews={product.numReviews} ></Rating>
            <div className="price">${product.price}</div>
            </div>
            </div>
        </div>
    )
}





