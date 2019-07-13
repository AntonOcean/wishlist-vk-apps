import React from "react";
import {Header, SearchBar, ProductList} from "../../components";
import {StyleContentGrid} from "./style";
import {STORE} from "../../DataMock";
import {StyleBaseTitle, StyleSubTitle} from "../../style/title";


export default class MainPage extends React.Component {
    render() {
        return (
            <div>
                <Header data={STORE} />

                <StyleContentGrid>
                    <StyleBaseTitle>Wishlist</StyleBaseTitle>
                    <SearchBar placeholder='Введите название товара' />
                    <StyleSubTitle>Популярное</StyleSubTitle>
                    <ProductList products={this.props.products} />
                </StyleContentGrid>
            </div>
        );
    }
}