import React, { Component } from 'react';
import { ProductContext } from '../context';
import { Link } from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductContext>
                {(value) => {
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/** title */}
                            <div className="row">
                                <div className="col-10 mxauto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/** end title*/}
                            {/* product info */}
                            
                            <div className="row">
                                {/* product image */}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} alt="product" className="img-fluid"/>
                                </div>
                                {/* product image end */}
                                {/* product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>مدل : {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        شرکت سازنده : <span className="text-uppercase">
                                            {company}
                                        </span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            قیمت : {price}<span>تومان</span>
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        توضیحات:
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/* buttons */}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>
                                                بازگشت به صفحه محصولات
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer 
                                            cart={true} //we can not set true to this and just wright cart and its true by default
                                            disabled={inCart? true: false} 
                                            onClick={
                                                () => {
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                }
                                        }>
                                            {inCart ? "اضافه شده" : "افزودن به سبد خرید"}
                                        </ButtonContainer>
                                    </div>
                                    {/* end buttons */}
                                </div>
                            </div>
                            {/* end product info */}
                        </div>
                    )
                }}
            </ProductContext>
        )
    }
}
