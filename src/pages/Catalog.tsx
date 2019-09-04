import * as React from 'react';
import { NavLink } from 'react-router-dom';
import IProduct from '../interfaces/product';
import { connect } from 'react-redux';
import { ADD_CART } from '../types/cart';

class Catalog extends React.Component<any, any>{
    constructor(props:any) {
        super (props);

        console.log (this.props.match.params.id);
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
                <h1 className="text-header-bigger">Ключницы</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9">
                            <blockquote className="blockquote bq-primary p-0">
                                <p className="pl-3 py-0">
                                    Ключницы торговой марки GALIB из натуральной кожи высшего качества, станут комфортным дополнением Вашего стиля. У нас Вы сможете приобрести не только мужские, но и женские коллекции стильных аксессуаров.
                                </p>
                            </blockquote>
                            <div className="row">
                                {
                                    this.props.product.filter((product:IProduct) => this.props.match.params.id == product.category_id).map((product:IProduct, index:number) => {
                                        return(
                                    <div key = {index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                                    <div className="product hoverable p-2">
                                       
                                        <div id="carousel-catalog" className="carousel slide carousel-fade" data-ride="carousel">
                                            <ol className="carousel-indicators">
                                                <li data-target="#carousel-catalog" data-slide-to="0" className="active"></li>
                                                <li data-target="#carousel-catalog" data-slide-to="1"></li>
                                            </ol>
                                            <NavLink to = {"/View/" + product.id}>
                                                <div className="carousel-inner mt-2" role="listbox">
                                                    <div className="carousel-item active">
                                                        <img className="d-block w-100" src="img/klatch_galib_7m249_black.jpg" alt="First slide" />
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img className="d-block w-100" src="img/klatch_galib_7m249_black.jpg" alt="Third slide" />
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                        <NavLink to = {"/View/" + product.id} className="product-title">
                                            {product.name}
                                        </NavLink>
                                        <div className="product-price">
                                            <span className="sale-price fs-18 font-italic mx-0 px-0 text-bold-red">
                                                {product.price}
                                            </span>
                                            <span className="sale-price-line">
                                                {product.old_price} 
                                            </span>
                                            
                                        </div>
                                        <div className="product-cart text-center pt-2">
                                            <button className="btn btn-add-to-cart btn-blue btn-md fs-14 font-weight-bold" onClick = {() =>{
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

                        <div className="col-xl-3">
                            
                            <div className="panel border bg-white p-3">
                                <h4 className="text-header mx-0 mt-1 fs-16 text-dark">Подбор параметров</h4>
                                <a className="text-primary mt-3 d-block" data-toggle="collapse" href="#priceCollapse" aria-expanded="false" aria-controls="priceCollapse">
                                    Розничная цена
                                    <i className="fa fa-angle-down"></i>
                                </a>
                                <div className="collapse show" id="priceCollapse">
                                    <div className="row">
                                        <div className="col-6">
                                            <label htmlFor="examphtmlForm2">От</label>
                                            <input type="text" id="examphtmlForm2" className="form-control" />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="exampleForm2">До</label>
                                            <input type="text" id="exampleForm2" className="form-control" />
                                        </div>
                                        <div className="col-12 p-4">
                                            <input id="ex13" type="text" className="w-100" data-slider-ticks="[0, 100, 200, 300, 400]" data-slider-ticks-snap-bounds="30" data-slider-ticks-labels='["$0", "$100", "$200", "$300", "$400"]'/>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <a className="text-primary mt-3 d-block" data-toggle="collapse" href="#materialCollapse" aria-expanded="false" aria-controls="materialCollapse">
                                    Материал
                                    <i className="fa fa-angle-down"></i>
                                </a>
                                <div className="collapse" id="materialCollapse">
                                    <div className="py-2">
                                        <div className="form-check px-0">
                                            <input type="checkbox" className="form-check-input" id="materialUnchecked" />
                                            <label className="form-check-label fs-16" htmlFor="materialUnchecked">Натуральная кожа (5)</label>
                                        </div>
                                        <div className="form-check px-0">
                                            <input type="checkbox" className="form-check-input" id="materialUnchecked2" />
                                            <label className="form-check-label fs-16" htmlFor="materialUnchecked2">Эко-кожа (4)</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <a className="text-primary mt-3 d-block" data-toggle="collapse" href="#colorCollapse" aria-expanded="false" aria-controls="colorCollapse">
                                    Цвет
                                    <i className="fa fa-angle-down"></i>
                                </a>
                                <div className="collapse" id="colorCollapse">
                                    <div className="py-2">
                                        <div className="form-check px-0">
                                            <input type="checkbox" className="form-check-input" id="materialUnchecked" />
                                            <label className="form-check-label fs-16" htmlFor="materialUnchecked">Черный (9)</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <a className="text-primary mt-3 d-block" data-toggle="collapse" href="#useCollapse" aria-expanded="false" aria-controls="useCollapse">
                                    Назначение
                                    <i className="fa fa-angle-down"></i>
                                </a>
                                <div className="collapse" id="useCollapse">
                                    <div className="py-2">
                                        <div className="form-check px-0">
                                            <input type="checkbox" className="form-check-input" id="materialUnchecked" />
                                            <label className="form-check-label fs-16" htmlFor="materialUnchecked">мужской (9)</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <a className="text-primary mt-3 d-block" data-toggle="collapse" href="#existCollapse" aria-expanded="false" aria-controls="existCollapse">
                                    Наличие товара
                                    <i className="fa fa-angle-down"></i>
                                </a>
                                <div className="collapse" id="existCollapse">
                                    <div className="py-2">
                                        <div className="form-check px-0">
                                            <input type="checkbox" className="form-check-input" id="materialUnchecked" />
                                            <label className="form-check-label fs-16" htmlFor="materialUnchecked">в наличии (4)</label>
                                        </div>
                                        <div className="form-check px-0">
                                            <input type="checkbox" className="form-check-input" id="materialUnchecked" />
                                            <label className="form-check-label fs-16" htmlFor="materialUnchecked">нет в наличии (5)</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <a className="text-primary mt-3 d-block" data-toggle="collapse" href="#typeCollapse" aria-expanded="false" aria-controls="typeCollapse">
                                    Тип застежки
                                    <i className="fa fa-angle-down"></i>
                                </a>
                                <div className="collapse" id="typeCollapse">
                                    <div className="py-2">
                                        <div className="form-check px-0">
                                            <input type="checkbox" className="form-check-input" id="materialUnchecked" />
                                            <label className="form-check-label fs-16" htmlFor="materialUnchecked">кнопка (3)</label>
                                        </div>
                                        <div className="form-check px-0">
                                            <input type="checkbox" className="form-check-input" id="materialUnchecked" />
                                            <label className="form-check-label fs-16" htmlFor="materialUnchecked">магнит (5)</label>
                                        </div>
                                        <div className="form-check px-0">
                                            <input type="checkbox" className="form-check-input" id="materialUnchecked" />
                                            <label className="form-check-label fs-16" htmlFor="materialUnchecked">молния (1)</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <a className="text-primary mt-3 d-block" data-toggle="collapse" href="#packageCollapse" aria-expanded="false" aria-controls="packageCollapse">
                                    Тип упаковки
                                    <i className="fa fa-angle-down"></i>
                                </a>
                                <div className="collapse" id="packageCollapse">
                                    <div className="py-2">
                                        <select className="browser-default form-control">
                                            <option value="">Все</option>
                                            <option value="1">плотная картонная коробка</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="clearfix"></div>

                                <button className="btn btn-cart"></button>
                            </div>
                        </div>
                    </div>
                </div>

       

        </div>
         </section>
        </div>
        );
    }
}

function mapStateToProps(state: any){
    return{
        product: state.product,
        cart: state.cart
    }
}

export default  connect(mapStateToProps)(Catalog);
