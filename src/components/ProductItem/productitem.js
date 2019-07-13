import React from "react";
import {StyleProductItem} from "./style";
import {Button} from "../../components";


export default class ProductItem extends React.Component {
    render() {
        return (
            <StyleProductItem>
                <img src={this.props.product.image}  alt='some product'/>
                <div className="name">{this.props.product.name}</div>
                <div className="price">{this.props.product.price}</div>
                <div className="description">{this.props.product.description}</div>
                <Button title='Добавить в избранное' />
            </StyleProductItem>
        );
    }
}