import * as React from 'react';
import ICart from '../interfaces/cart';
import { connect } from 'react-redux';
import IProduct from '../interfaces/product';
import { DELETE_CART, CHANGE_CART } from '../types/cart';

class Cart extends React.Component<any, any>{
    constructor(props: any) {
        super(props);

    }
    buttonClickHandler(index: number){
       this.props.dispatch({
           type: DELETE_CART,
           index
       })
    }

    changeHandler(event: any, index: number){
        
        this.props.dispatch({
            type: CHANGE_CART,
            quantity: Number(event.target.value),
            index
        })
    }

    sum(){
        let sum = 0;

        this.props.cart.forEach((element: ICart) => {
            let quantity = element.quantity;
            let product_id = element.product_id;

            let [p] = this.props.product.filter((product: IProduct) => product.id == product_id);
            
            sum += p.price * quantity;
        });

        return sum;
    }

    render() {
        return (
            <div>
                <section className="view">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Главная</a></li>
                            <li className="breadcrumb-item"><a href="#">Кабинет</a></li>
                            <li className="breadcrumb-item active">Корзинка</li>
                        </ol>
                        <h1 className="text-header-bigger">Корзина</h1>
                        <div className="container">
                            <div className="card">
                                <div className="card-body">
                                    
                                    <div className="table-responsive">

                                        <table className="table product-table">
                                            <thead className="mdb-color lighten-5">
                                                <tr>
                                                    <th></th>
                                                    <th className="font-weight-bold">
                                                        <strong>Товар</strong>
                                                    </th>
                                                    <th></th>
                                                    <th className="font-weight-bold">
                                                        <strong>Цена</strong>
                                                    </th>
                                                    <th className="font-weight-bold">
                                                        <strong>Количество</strong>
                                                    </th>
                                                    <th className="font-weight-bold">
                                                        <strong>Общее</strong>
                                                    </th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.props.cart.map((cart: ICart, index: number) => {
                                                        let [p] = this.props.product.filter((product: IProduct,) => product.id == cart.product_id);
                                                        
                                                        return (
                                                            <tr key = {index}>
                                                                <th scope="row">
                                                                    <img src={ p.image} alt="" className="img-fluid z-depth-0" />
                                                                </th>
                                                                <td>
                                                                    <h5 className="mt-3">
                                                                        <strong>{p.name}</strong>
                                                                    </h5>
                                                                    <p className="text-muted">Apple</p>
                                                                </td>
                                                                <td></td>
                                                                <td>{p.price}</td>
                                                                <td>
                                                                    <input type="number" min="0" value={cart.quantity} aria-label="Search" className="form-control" style={{ width: "100px" }} onChange ={(event) => {
                                                                        this.changeHandler(event, index);
                                                                    }}/>
                                                                </td>
                                                                <td className="font-weight-bold">
                                                                    <strong>{cart.quantity * p.price}</strong>
                                                                </td>
                                                                <td>
                                                                    <button type="button" className="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top" title="Remove item" onClick = {() =>{
                                                                        this.buttonClickHandler(index)
                                                                    }}>X
                                                                    
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                        );
                                                    })
                                                }

                                                <tr>
                                                    <td colSpan={3}></td>
                                                    <td>

                                                    </td>
                                                    <td className="text-right">
                                                        <h4 className="mt-2">
                                                            <strong>Сумма</strong>
                                                        </h4>
                                                    </td>
                                                    <td colSpan={3} className="text-right">
                                                        <h4 className="mt-2">
                                                            <strong>{
                                                                this.sum()
                                                               }</strong>
                                                        </h4>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                    <button type="button" className="pull-right btn btn-cart btn-primary btn-md fs-14 p-2 font-weight-bold">Оформить заказ
                                        <i className="fa fa-angle-right right"></i>
                                    </button>
                                    <div className="clearfix"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
   
}

function mapStateToProps(state: any) {
    return {
        cart: state.cart,
        product: state.product
    }
}

export default connect(mapStateToProps)(Cart);