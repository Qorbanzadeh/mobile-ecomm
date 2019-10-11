import React from 'react'
import { Link } from 'react-router-dom';

export default function CartTotals({value}) {

    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>خالی کردن سبد خرید</button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                مجموع جدا از ارزش افزوده : 
                            </span>
                            <strong> {cartSubTotal} تومان</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                ارزش افزوده : 
                            </span>
                            <strong> {cartTax} تومان</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                مجموع : 
                            </span>
                            <strong>  {cartTotal} تومان</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
