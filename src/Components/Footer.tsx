import * as React from 'react';

export default class Footer extends React.Component<any, any>{
    constructor (props:any){
        super(props);
    }

    render(){
        return (
            <footer className="main pt-3 pb-4">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-5">
                        <h1 className="text-header-bigger mx-0">
                            Каталог товаров
                        </h1>
                        <ul>
                            <li><a href="javascript: 0">Кошельки</a></li>
                            <li><a href="javascript: 0">Обложки</a></li>
                            <li><a href="javascript: 0">Зажим для денег</a></li>
                            <li><a href="javascript: 0">Клатчи</a></li>
                            <li><a href="javascript: 0">Видео-обзоры</a></li>
                            <li><a href="javascript: 0">Ключницы</a></li>
                            <li><a href="javascript: 0">Визитницы</a></li>
                            <li><a href="javascript: 0">Золотая коллекция</a></li>
                            <li><a href="javascript: 0">Сумки</a></li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                    <div className="col-xl-3">
                        <h1 className="text-header-bigger mx-0">
                            О магазине
                        </h1>
                        <ul>
                            <li className="w-100"><a href="javascript: 0">Как купить</a></li>
                            <li className="w-100"><a href="javascript: 0">Доставка</a></li>
                            <li className="w-100"><a href="javascript: 0">О магазине</a></li>
                            <li className="w-100"><a href="javascript: 0">Гарантия</a></li>
                            <li className="w-100"><a href="javascript: 0">Контакты</a></li>
                            <li className="w-100"><a href="javascript: 0">Купить оптом</a></li>
                            <li className="w-100"><a href="javascript: 0">Политика конфиденциальности</a></li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                    <div className="col-xl-3 text-right">
                        <div className="feedback-block">
                            <button className="btn btn-dark text-uppercase h-34 py-2 px-4 mt-4 mx-0 waves-effect waves-light">
                                <i className="fa fa-telegram"></i> мы в телеграм
                            </button>
                        </div>
                        
                        <p><small className="text-grey">Свяжитесь с нами:</small></p>
                        <h5 className="text-white">+99893 7 666 999</h5>
                        <h6 className="mt-4">
                            <i className="fa fa-phone fa-22 text-white"></i> 
                            <a href="javascript: 0" className="">Заказать обратный звонок</a>
                        </h6>

                        <p className="mt-5 pt-4"><small className="text-grey">© Интернет-магазин кожгалантереи GALIB, 2014-2018</small></p>
                    </div>
                </div>
            </div>
        </footer>
        )
    }
}