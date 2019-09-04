import * as React from 'react';
import { ADD_CART } from '../types/cart';
import { connect } from 'react-redux';
import IProduct from '../interfaces/product';

class View extends React.Component<any, any>{
    constructor (props:any){
        super(props);
    } 

    buttonClickHandler(product_id: number){
        this.props.dispatch({
            type: ADD_CART,
            cart: {
                id: this.props.cart.length,
                product_id,
                quantity: 1
            }
        })
    }
    render() {
        return(
            <div>
                 <section className="view">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Главная</a></li>
                    <li className="breadcrumb-item"><a href="#">Ключницы</a></li>
                    <li className="breadcrumb-item active">Ключница GALIB 13M224</li>
                </ol>
                <h1 className="text-header-bigger">Ключница GALIB 13M224</h1>
                <div className="container">
                   
                    {
                        this.props.product.filter((product:IProduct) => this.props.match.params.id == product.id).map((product:IProduct, index: number) => {
                            return(
                            <div className="row justify-content-between">
                                    <div className="col-xl-6 col-lg-6 col-md-6 p-2">
                            <div className="img-box z-depth-1 main-img">
                                <img src={product.image} alt="" className="img-fluid w-70 d-block mx-auto"/>
                            </div>
                            <div className="row mt-4">
                                <div className="col-3">
                                    <div className="img-box border hoverable">
                                        <a href="javascript: 0" className="main-img-select">
                                            <img src={product.image} alt="" className="img-fluid w-70 d-block mx-auto"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="img-box border hoverable">
                                        <a href="javascript: 0" className="main-img-select">
                                            <img src={product.image} alt="" className="img-fluid w-70 d-block mx-auto"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="img-box border hoverable">
                                        <a href="javascript: 0" className="main-img-select">
                                            <img src={product.image} alt="" className="img-fluid w-70 d-block mx-auto"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="img-box border hoverable">
                                        <a href="javascript: 0" className="main-img-select">
                                            <img src={product.image} alt="" className="img-fluid w-70 d-block mx-auto"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="pl-0 pl-lg-5">
                                <p className="text-dark-grey"><del><b>{product.old_price}</b></del></p>
                                <h3 className="price">{product.price} <small>(Экономия в цене - {product.old_price - product.price}.)</small></h3>
                                <ul>
                                    <li><b>Артикул:</b> {product.name}</li>
                                    <li><b>Материал:</b>{product.name}</li>
                                    <li><b>Цвет:</b> {product.name}</li>
                                    <li><b>Назначение:</b> {product.name}</li>
                                    <li><b>Наличие товара:</b>{product.name}</li>
                                    <li><b>Размер:</b> {product.name}</li>
                                    <li><b>Тип застежки:</b> {product.name}</li>
                                    <li><b>Тип упаковки:</b> {product.name}</li>
                                    <li><b>Подкладка:</b> {product.name}</li>
                                    <li><b>Материал:</b> {product.name}</li>
                                </ul>
                                <p className="mt-3">
                                {product.name}
                                </p>
                                <button className="btn btn-add-to-cart fs-18 btn-md" onClick = {() => {
                                    this.buttonClickHandler(product.id);
                                }}>
                                    В корзину
                                </button>
                            </div>
                            </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </section>

            </div>
        );
    }
}

function mapToStateProps(state:any){
    return{
        cart: state.cart,
        product: state.product
    }
}

export default connect(mapToStateProps)(View);