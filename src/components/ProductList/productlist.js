import React from "react";
import {ProductItem} from "../../components";
import {StyleProductList} from "./style/productlist";
import {StyleProductListColumn} from "./style/productlistcolumn";


export default class ProductList extends React.Component {
    render() {
        const list = this.props.products.reverse();

        const colOne = [];
        const colTwo = [];
        const colThree = [];
        //TODO как убрать этот изврат??
        while (list.length > 0) {
            colOne.push(<ProductItem product={list.pop()} />);
            if (list.length <= 0)
                break;
            colTwo.push(<ProductItem product={list.pop()} />);
            if (list.length <= 0)
                break;
            colThree.push(<ProductItem product={list.pop()} />);
            if (list.length <= 0)
                break;
        }

        // const rows = [];
        // this.props.products.forEach((product) => {
        //   rows.push(<ProductItem product={product} />);
        // });

        return (
            <StyleProductList>
                <StyleProductListColumn>{colOne}</StyleProductListColumn>
                <StyleProductListColumn>{colTwo}</StyleProductListColumn>
                <StyleProductListColumn>{colThree}</StyleProductListColumn>
            </StyleProductList>
        );
    }
}