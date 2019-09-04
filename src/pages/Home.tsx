import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import IProduct from '../interfaces/product';
import { ADD_CART } from '../types/cart';

class Home extends React.Component<any, any>{
    constructor(props: any) {
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
        return (
            <div>
                <section className="leader">
                    <div className="container">
                        <h1 className="text-header">Лидеры продаж</h1>
                        <div id="multi-item" className="carousel slide carousel-multi-item" data-ride="carousel">

                            <div className="carousel-inner" role="listbox">
                                {
                                    this.props.product.filter((product: IProduct) => product.is_leader).map((product: IProduct, index: number) => {
                                        return (
                                            <div className={index == 0 ? "carousel-item px-4 active" : "carousel-item px-4"} key={product.id}>

                                                <div className="row">
                                                    <div className="col-xl-7 col-lg-7 col-md-6 px-5 d-flex justify-content-center align-items-center">
                                                        <div className="img-box">
                                                            <img src={product.image} alt={product.name} className="img-fluid w-70 d-block mx-auto" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-5 col-lg-5 col-md-6 pl-lg-0">
                                                        <h1 className="text-header-bigger mx-3 mx-md-0">{product.name}</h1>
                                                        <p className="color-555 mx-3 mx-md-0">
                                                            {product.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                                <a className="carousel-control-prev text-dark justify-content-start" href="#multi-item" role="button" data-slide="prev">
                                    <i className="fa fa-2x fa-chevron-circle-left"></i>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next text-dark justify-content-end" href="#multi-item" role="button" data-slide="next">
                                    <i className="fa fa-2x fa-chevron-circle-right"></i>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="news">
                    <div className="container">
                        <h1 className="text-header">
                            Новинки
                        </h1>
                        <div className="row">

                            {this.props.product.filter((product: IProduct) => product.is_new).map((product: IProduct, index: number) => {
                                return (
                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-3" key={index}>
                                        <div className="product hoverable px-2">
                                            <div id="carousel-1z" className="carousel slide carousel-fade" data-ride="carousel">
                                                <ol className="carousel-indicators">
                                                    <li data-target="#carousel-1z" data-slide-to="0" className="active"></li>
                                                </ol>
                                                <NavLink to={"/View/" + product.id}>
                                                    <div className="carousel-inner mt-2" role="listbox">
                                                        <div className="carousel-item active">
                                                            <img className="d-block w-100" src={product.image} alt={product.name} />
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <NavLink to={"/View/" + product.id} className="product-title">
                                                {product.name}
                                            </NavLink>
                                            <div className="product-price">
                                                {
                                                    product.old_price ? (
                                                        <span className="sale-price-line">
                                                            {product.old_price} so'm
                                                        </span>
                                                    ) : ''
                                                }
                                                <span className="sale-price">
                                                    {product.price} so'm
                                                </span>
                                            </div>
                                            <div className="product-cart text-center pt-2">
                                                <button className="btn btn-cart btn-blue btn-md font-weight-bold" onClick = {()=>{
                                                    this.buttonClickHandler(product.id);
                                                }}>
                                                    В корзину
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                );
                            })}

                        </div>
                    </div>
                </section>
                <section className="info">
                    <div className="container">
                        <div className="row justify-content-between py-4">
                            <div className="col-xl-8 col-lg-8 col-md-8">
                                <img src="img/galib-logo-sm.png" alt="" />
                                <p>
                                    Кожгалантерея HG GALIB является на сегодняшний день одним из самых востребованных аксессуаров, так как практична во всех отношениях.
                        </p>
                                <p>
                                    Galib производит кожгалантерею для тех, кто любит стиль, современность, мобильность и не сорит деньгами.
                        </p>
                                <p>
                                    Необходимую комплектацию аксессуаров можно подобрать в одном дизайне, например, визитница, ключница, косметичка и сумка, обложка для паспорта и автодокументы и т д.
                        </p>
                                <p>
                                    Все модели изготавливаются только из натуральной кожи. Оригинальный и красивый дизайн создан с учетом современных требований российского потребителя. В каждой модели есть многочисленные отделения под денежные купюры, под монеты, отделения под кредитные карты, под визитки, под удостоверения, под водительские права, во многих моделях предусмотрены отделения под SIM и под MEMORY карты.
                        </p>
                                <a href="javascript: 0" className="a-standard">
                                    Подробнее о компании
                        </a>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4">
                                <h1 className="text-header-bigger mx-0">
                                    Что нового?
                        </h1>
                                <ul className="news-list">
                                    <li>
                                        <a href="javascript: 0" className="my-0">02.02.2017</a>
                                        <p className="my-0">
                                            Блог: Краш-тест кошелька! Кожа или нет! Визитница GALIB 1M001R
                                </p>
                                    </li>
                                    <li>
                                        <a href="javascript: 0" className="my-0">02.02.2017</a>
                                        <p className="my-0">
                                            Блог: Краш-тест кошелька! Кожа или нет! Визитница GALIB 1M001R
                                </p>
                                    </li>
                                    <li>
                                        <a href="javascript: 0" className="my-0">02.02.2017</a>
                                        <p className="my-0">
                                            Блог: Краш-тест кошелька! Кожа или нет! Визитница GALIB 1M001R
                                </p>
                                    </li>
                                </ul>
                                <a href="javascript: 0" className="btn btn-default btn-md font-weight-bold">
                                    Все новости
                        </a>
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
        product: state.product,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Home);