import React, { Component } from 'react'
import Product from './Product'
import Title from './Title';
import {ProductContext} from '../context'

export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>
                        <div className="row">
                            <ProductContext>
                            {value => {
                                return value.products.map( product => {
                                    return <Product product={product} key={product.id}/>;
                                });
                            }}
                            </ProductContext>
                        </div>
                    </div>
                </div>
            </React.Fragment>
                // <Product />
        );
    }
}
