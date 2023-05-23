import './cart.css'
import '../../styles/style.css';
import { Navigation,Footer } from '../../components/'
export default function Cart()
{
    return (
        
        <><>
            <Navigation />,
            <div className="container">
                <div className="grid-container-column">
                    <div className="item1">
                        <div className="horizontal-card box-shadow">
                            <img className="horizontal-img" srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                            <div className="h-text description">
                                <h5>Organic Fruits & Veggies
                                </h5><br />
                                <p>200$</p>
                                <br />
                                <label for="qty">Quantity 
                                <button className='btn btn-count'>+</button>0<button className='btn btn-count'>-</button>
                                </label>
                                <br />
                                <button className="btn-h btn dark ">Remove From Cart</button>
                                <button className="btn-h btn dark ">Move to Whishlist</button>

                            </div>
                        </div>
                        <div className="horizontal-card box-shadow">
                            <img className="horizontal-img" srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                            <div className="h-text description">
                                <h5>Organic Fruits & Veggies
                                </h5><br />
                                <p>200$</p>
                                <br />
                                <label for="qty">Quantity
                                <button className='btn btn-count'>+</button>0<button className='btn btn-count'>-</button>

                                </label>
                                <br />
                                <button className="btn-h btn dark ">Remove From Cart</button>
                                <button className="btn-h btn dark ">Move to Whishlist</button>

                            </div>
                        </div>


                        <div className="horizontal-card box-shadow">
                            <img className="horizontal-img" srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                            <div className="h-text description">
                                <h5>Organic Fruits & Veggies
                                </h5><br />
                                <p>200$</p>
                                <br />
                                <label for="qty">Quantity
                                <button className='btn btn-count'>+</button>0<button className='btn btn-count'>-</button>

                                    </label >
                                    <br />
                                    <button className="btn-h btn dark ">Remove From Cart</button>
                                    <button className="btn-h btn dark ">Move to Whishlist</button>

                                </div>
                        </div>
                    </div>


                    <div className="item2">
                        <div className="horizontal-card checkout box-shadow">
                            <div className="h-text description">
                                <h5>Price Details
                                </h5><br />
                                <br />
                                <hr/>
                                <div className="price grid-container-column">
                            <div className="price-item1">
                                <span>Price</span><br />
                                <span>Discount</span>
                                <hr/>
                                <span>Total</span>
                            </div>
                            <div className="price-item2">
                                <span>600$</span><br />
                                <span>100$</span>
                                <hr/>

                                <span>500$</span>
                            </div>
                        </div>
                                    <br />
                                    <button className="btn-cart btn dark ">Place Order</button>

                                </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>

        </><hr />
        <Footer /></>
)
}