import { ADD_PRODUCTS } from "../types/product";
import IProduct from "../interfaces/product";

export default (prevState: IProduct[] = [], action:any) => {
    switch(action.type){
        case ADD_PRODUCTS:
            return [
                ...prevState,
                ...action.products
            ];

        default: return prevState;
    }
}