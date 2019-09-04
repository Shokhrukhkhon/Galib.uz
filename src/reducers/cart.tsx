import { ADD_CART, ADD_CARTS, DELETE_CART, INCREMENT_CART, DECREMENT_CART, CHANGE_CART } from "../types/cart";
import ICart from "../interfaces/cart";

export default (prevState: ICart[] = [], action:any) => {

    switch (action.type) {
        case ADD_CART:

            /**
             * prevState = [
             *  {id:1, product_id: 1, quantity: 1},
             *  {id:1, product_id: 2, quantity: 1},
             *  {id:1, product_id: 3, quantity: 1},
             * ]
             * 
             * action.car = {id:1, product_id:2, quantity: 1}
             */
            let topildi = false;

             for(let i:number = 0; i < prevState.length; i++){
                 if(prevState[i].product_id == action.cart.product_id){
                    topildi = true;
                 }
             }
             if(topildi){
                     return prevState.map((cart: ICart, index: number) => {
                        if(cart.product_id == action.cart.product_id){
                            return {
                                id: cart.id,
                                product_id: cart.product_id,
                                quantity: cart.quantity+1
                            } 
                        } else return cart;
                     })
            } 
            return [
                    ...prevState,
                    action.cart
                    ];
            

        case ADD_CARTS: 
            return [
                ...prevState,
                ...action.carts
            ];

        case DELETE_CART:
            return prevState.filter((cart: ICart, index: number) => index != action.index);
        
        case INCREMENT_CART:
            return prevState.map((cart: ICart) => {
                return cart.id == action.id ? {
                    ...cart,
                    quantity: cart.quantity + 1
                } : cart
            });
        case DECREMENT_CART:
            return prevState.map((cart: ICart) => {
                return cart.id == action.id ? {
                    ...cart,
                    quantity: cart.quantity - 1
                } : cart
            });

        case CHANGE_CART: 
            return prevState.map((cart: ICart, index: number) => {

                return action.index == index ? {
                    ...cart,
                    quantity: action.quantity 
                } : cart
            })
        default: return prevState;
    }
}