import React from 'react';
import {PRODUCTS} from "./DataMock";
import {MainPage} from "./pages";


export default function App() {
    return (
        <MainPage products={PRODUCTS} />
        //<ProductItem product={PRODUCTS[0]}/>
        //<Button title='Добавить в избранное'/>
        //<ProductList products={PRODUCTS}/>
        //<SearchSection placeholder='Введите название товара'/>
        //<Header data={STORE}/>
    );
}