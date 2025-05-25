import React from 'react';
import emptyCart from "../assets/emptycart.png"
import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="m-auto pb-20">
        <img className="pt-30 mx-auto w-md" src={emptyCart} />
        <p className="text-center font-bold text-3xl font-sans pb-4">Your Cart is Empty!</p>
        <p className="text-2xl text-center font-extralight font-stretch-95% pb-4">Looks like you have not added anything to your cart. Go ahead &amp; explore the top restaurants.</p>
        <p className="text-center"><Link to="/" className="text-orange-600 text-2xl text-center font-bold underline">Go To Restaurants</Link></p>
    </div>
  )
}

export default EmptyCart