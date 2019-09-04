import { combineReducers } from "redux";
import product from './product';
import category from './category';
import cart from './cart';

export default combineReducers({
    product,
    category,
    cart
});