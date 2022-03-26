import './landing-page.css'

import img1 from '../../assets/banner.png'
import img2 from '../../assets/OFFER.png'
import {Navigation,Footer} from '../../components/index'
export default function LandingPage()
{
    return (
    <>
    <Navigation/>
        <div className="container">
                <div className="grid-container">
                    <div className="item1">
                        <img className="avatar-img-lg" src="https://img.freepik.com/free-photo/grapes-strawberries-pineapple-kiwi-apricot-banana-whole-pineapple_23-2147968680.jpg?w=900" alt="" />
                        <p>Fruit</p>
                    </div>
                    <div className="item2">
                        <img className="avatar-img-lg" src="https://img.freepik.com/free-photo/top-view-assortment-vegetables-paper-bag_23-2148853335.jpg?w=996" alt="" />
                        <p>Vegetables</p>

                    </div>
                    <div className="item3">
                        <img className="avatar-img-lg" src="https://img.freepik.com/free-photo/set-pecan-pistachios-almond-peanut-cashew-pine-nuts-lined-up-assorted-nuts-dried-fruits-mini-different-bowls_176474-2051.jpg?w=900" alt="" />
                        <p>Dry Food</p>

                    </div>
                    <div className="item4">
                        <img className="avatar-img-lg" src="https://img.freepik.com/free-photo/dairy-products_114579-8756.jpg?w=360" alt="" />
                        <p>Dairy Product</p>

                    </div>
                    <div className="item5">
                        <img className="avatar-img-lg" src="https://img.freepik.com/free-photo/front-view-fresh-fruit-cocktails-with-fresh-fruit-slices-ice-cooling-blue-drink-juice-cocktail-fruit-color_140725-24741.jpg?w=996" alt="" />
                        <p>Fresh Juices</p>
                    </div>
                </div>
            </div>

<div className="items">
<div className="banner">
    <img src={img1} className="img-responsive " alt=""/>
</div>
<div className="ad">
    <img src={img2} className="img-responsive" alt=""/>
</div>
</div>

<div className="grid-container">
        <div className="item1">
            <div className="card">
                <img className="card-img" srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
                <hr/>
                <div className="description">
                    <h5>Organic Fruits & Veggies
                    </h5><br/>
                    <p>
                        200$</p>
                    <div className="card-btn ">
                        <button className="btn dark ">Add</button>
                    </div>
                </div>
            </div>
        </div>


        <div className="item2">
            <div className="card">
                <img className="card-img" srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
                <hr/>
                <div className="description">
                    <h5>Organic Fruits & Veggies
                    </h5><br/>
                    <p>
                        200$</p>
                    <div className="card-btn ">
                        <button className="btn dark ">Add</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="item3">
            <div className="card">
                <img className="card-img" srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
                <hr/>
                <div className="description">
                    <h5>Organic Fruits & Veggies
                    </h5><br/>
                    <p>
                        200$</p>
                    <div className="card-btn ">
                        <button className="btn dark ">Add</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="item4">
            <div className="card">
                <img className="card-img" srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
                <hr/>
                <div className="description">
                    <h5>Organic Fruits & Veggies
                    </h5><br/>
                    <p>
                        200$</p>
                    <div className="card-btn ">
                        <button className="btn dark ">Add</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <hr/>
    <Footer/>



</>
)}