import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import Header from './compontents/Header';
import Footer from './compontents/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Catalog from './pages/Catalog';
import View from './pages/View';

import { createStore } from 'redux';
import combinedReducers from './reducers/combine';

import * as products from './database/product.json';
import * as categories from './database/category.json';
import { ADD_CATEGORIES } from './types/category';
import { ADD_PRODUCTS } from './types/product';
import { Provider } from 'react-redux';

const store = createStore(combinedReducers);

store.dispatch({
    type: ADD_CATEGORIES,
    categories
});

store.dispatch({
    type: ADD_PRODUCTS,
    products
});
store.subscribe(() => {
    console.log (store.getState());
})

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Route path="/"  component={Header}/>
                <Route path="/" exact component={Home} />
                <Route path="/Cart" exact component={Cart} />
                <Route path="/Catalog/:id" exact component={Catalog} />
                <Route path="/View/:id" exact component={View} />
 
                <Footer />
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById("root")
);  