import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import {delItem} from  "../redux/action/index";
// import {product} from './component/product';

const Cart = () => {

const[product ,  setProduct]= useState([]);

    const state= useSelector((state)=> state.addProduct)
    const dispatch= useDispatch()

    const handleButton =(product)=>{
        dispatch(delItem(product))
    }
    const ShowProduct =()=>{
        return(
            <>
        <div className="px-4 my-5 bg-light rounder-3" key={product.id}>
            <div className='row'>
                <div className="col-md-4">
                    <img src={product.image} alt={product.title} height="200px" width="180px" />
                </div>
                <div className='col-md-4'>
                    <h3>{product.title}</h3>
                    <p className='lead fw-bold'> {product.qty} X ${product.price} = ${product.qty * product.price}</p>
                    <button className='btn btn-outline-dark me-4' onClick={() => handleButton(product)}>
                        <i className='fa fa-minus'></i>
                    </button>
                    <button className="btn btn-outline-dark" onClick={() => handleButton(product)}>
                        <i className='fa fa-plus'></i>
                    </button>  
                     </div>
                      </div>
                      
                      </div>
                      
                      </>
    );
}
const emptyCart = () => {
    return(
       <div className="px-4 my-5 bg=light rounded-3 py-5">
        <div className="container py-4">
            <div className="row">
                <h3>Your Cart Is Empty</h3>
            </div>
        </div>
       </div>
    );
}
 const button =()=>{
    return(
        <div className="container">
            <div className="row">
                <NavLink  to={`/cart`} className="btn btn-outline-primary mb-5 w-25">Checkout</NavLink>
            </div>
        </div>
    );
 }
return(
    <>
    {state.length === 0 && emptyCart()}
    {state.length !== 0 && state.map(ShowProduct)}
    {state.length !== 0 && button()}

    </>
)
    }
export default Cart