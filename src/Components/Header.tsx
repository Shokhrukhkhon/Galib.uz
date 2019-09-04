import * as React from 'react';
import { NavLink } from 'react-router-dom';
import ICategory from '../interfaces/category';
import { connect } from 'react-redux';

 class Header extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper">
                <header className="main pb-4">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-6 align-items-center text-center text-lg-left px-1 px-lg-0 d-none d-sm-flex">
                                <ul className="top-menu d-flex justify-content-between d-lg-block w-100 text-center text-lg-left">
                                    <li><NavLink to="/">Как купить</NavLink></li>
                                    <li><NavLink to="/">Доставка</NavLink></li>
                                    <li><NavLink to="/">О магазине</NavLink></li>
                                    <li><NavLink to="/">Контакты</NavLink></li>
                                    <li><NavLink to="">Купить оптом</NavLink></li>
                                </ul>
                            </div>
                            <div className="d-flex px-0 px-sm-3 col-lg-6 col-md-12 px-lg-0 justify-content-between justify-content-lg-end">
                                <ul className="top-menu-right mr-md-3 pt-0 pt-sm-3">
                                    <li className="mr-2 d-inline-block d-md-none">
                                        <button className="ma5menu__toggle btn btn-md btn-grey p-1" type="button">
                                            <i className="fa fa-bars fa-2x"></i>
                                        </button>
                                    </li>
                                    <li ><i className="fa fa-user"></i> <NavLink to="/kirish">Войти</NavLink></li>
                                    <li className="border-right border-dark pr-2"><NavLink to="/register">Регистрация</NavLink></li>
                                </ul>

                                <ul className="top-menu-right-second  d-flex align-items-center pt-0 pt-sm-3">
                                    <li className=" d-none d-sm-inline-block"><NavLink to="/cart" className="cart"><i className="fa fa-shopping-bag"></i> <span>Корзинка</span> </NavLink></li>
                                    <li className="bag-info d-none d-sm-inline-block">1 товар на сумму <span>1 160 руб.</span></li>
                                    <li className="d-inline-block d-sm-none">
                                        <button className="ma5menu__toggle btn btn-md btn-grey p-1" type="button">
                                            <i className="fa fa-shopping-bag fa-2x"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h5 className="pull-right text-grey mb-0 d-none d-md-block">+998 93 7 666 999</h5>
                            <div className="clearfix"></div>
                            <div className="row justify-content-between menu-center">
                                <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                                    <NavLink to="/">
                                        <img className="img-fluid" src="img/galib-logo.png" alt="" />
                                    </NavLink>
                                </div>
                                <div className="col-xl-6 col-lg-5 col-md-12">
                                    <form action="" className="search-form">
                                        <div className="row justify-content-center">
                                            <div className="col-12 col-md-11">
                                                <div className="input-group  mt-4">
                                                    <input type="text" className="form-control" placeholder="Поиск..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-dark waves-effect m-0" type="button">
                                                            <i className="fa fa-search"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-6 d-flex justify-content-end flex-wrap feedback-block">
                                    <button className="btn btn-dark text-uppercase h-34 py-2 px-4 mt-4 mx-0">
                                        <i className="fa fa-phone"></i> заказать обратный вызов
                            </button>
                                    <p>
                                        <i className="fa fa-clock-o"></i> Заказы принимаются <b>круглосуточно</b>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <nav className="main-menu mt-4 mt-lg-0 d-none d-md-block">
                            <ul className="d-flex justify-content-between">
                            {
                                this.props.category.map((category: ICategory, index: number) => {
                                    return (<li><NavLink to="/catalog" key={index}>{category.name}</NavLink></li> )
                                })
                            }
                            </ul>
                        </nav>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7 pt-4">
                                <img src="img/intro-catal-pic.jpg" alt="" className="img-fluid" />
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <dl className="features mt-5">
                                    <dt className="quality">
                                        <i></i> <h2>КАЧЕСТВЕННЫЙ ТОВАР</h2>
                                        <div className="clearfix"></div>
                                    </dt>
                                    <dd>
                                        100% кожа, ровные швы, оригинальный дизайн, надежные металлические молнии с фирменной меткой
                            </dd>
                                    <dt className="price">
                                        <i></i> <h2>Низкие цены</h2>
                                        <div className="clearfix"></div>
                                    </dt>
                                    <dd>
                                        Наш секрет - налаженная система поставок и партнерские отношения с поставщиками кожи
                            </dd>
                                    <dt className="production">
                                        <i></i> <h2>СОБСТВЕННОЕ ПРОИЗВОДСТВО</h2>
                                        <div className="clearfix"></div>
                                    </dt>
                                    <dd>
                                        Позволяет снизить себестоимость и контролировать качество продукта на всех этапах
                            </dd>
                                    <dt className="years">
                                        <i></i> <h2>24 ГОДА НА РЫНКЕ</h2>
                                        <div className="clearfix"></div>
                                    </dt>
                                    <dd>
                                        Мы любим свою продукцию и умеем ее делать, и наш опыт - доказательство ее качества
                            </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }

}


function mapStateToProps(state: any) {
    return {
        category: state.category
    }
}

export default connect(mapStateToProps)(Header);