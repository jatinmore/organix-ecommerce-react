import './cart.css'
import '../../pages/landing-page/landing-page.css'
import { Navigation,Footer } from '../../components/'
export default function Cart()
{
    return (
        
        <><>
            <Navigation />,

            <div class="container">
                <div class="grid-container-column">
                    <div class="item1">
                        <div class="horizontal-card box-shadow">
                            <img class="horizontal-img" srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                            <div class="h-text description">
                                <h5>Organic Fruits & Veggies
                                </h5><br />
                                <p>200$</p>
                                <br />
                                <label for="qty">Quantity<input class="input-field qty" type="number" />
                                </label>
                                <br />
                                <button class="btn-h btn dark ">Remove From Cart</button>
                                <button class="btn-h btn dark ">Move to Whishlist</button>

                            </div>
                        </div>
                        <div class="horizontal-card box-shadow">
                            <img class="horizontal-img" srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                            <div class="h-text description">
                                <h5>Organic Fruits & Veggies
                                </h5><br />
                                <p>200$</p>
                                <br />
                                <label for="qty">Quantity<input class="input-field qty" type="number" />
                                </label>
                                <br />
                                <button class="btn-h btn dark ">Remove From Cart</button>
                                <button class="btn-h btn dark ">Move to Whishlist</button>

                            </div>
                        </div>


                        <div class="horizontal-card box-shadow">
                            <img class="horizontal-img" srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                            <div class="h-text description">
                                <h5>Organic Fruits & Veggies
                                </h5><br />
                                <p>200$</p>
                                <br />
                                <label for="qty">Quantity<input class="input-field qty" type="number" />
                                    </label >
                                    <br />
                                    <button class="btn-h btn dark ">Remove From Cart</button>
                                    <button class="btn-h btn dark ">Move to Whishlist</button>

                                </div>
                        </div>
                    </div>


                    <div class="item2">
                        <div class="horizontal-card checkout box-shadow">
                            <div class="h-text description">
                                <h5>Price Details
                                </h5><br />
                                <br />
                                <hr/>
                                <div class="price grid-container-column">
                            <div class="price-item1">
                                <span>Price</span><br />
                                <span>Discount</span>
                                <hr/>
                                <span>Total</span>
                            </div>
                            <div class="price-item2">
                                <span>600$</span><br />
                                <span>100$</span>
                                <hr/>

                                <span>500$</span>
                            </div>
                        </div>


                                    <br />
                                    <button class="btn-cart btn dark ">Place Order</button>

                                </div>
                        </div>
                    </div>



                    <div>



                    </div>
                </div>
            </div>

        </><hr /><Footer /></>)
}