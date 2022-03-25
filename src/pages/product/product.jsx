import './product.css'
import { Navigation,Footer } from '../../components'
export default function Product()
{
    return(
        <><Navigation />
        <div class="container-product">
            <div class="flex-container">
                <div class="sidebar">
                    <div class="aside">
                        <span class="aside-header">Filter</span>
                        <br />
                        <hr />

                        <ul class="list">
                            <p>Rating</p>
                            <li class="aside-item">
                                <div class="rating">
                                    <label for=""><p><input type="checkbox" /> 2<i class="fas fa-star"></i> and above</p>
                                    </label>
                                    <label for=""><p><input type="checkbox" /> 4<i class="fas fa-star"></i> and above</p>
                                    </label>
                                </div>
                                <br />
                                <hr />
                            </li>
                            <li class="aside-item">
                                <p>Categories</p>
                                <div class="category">
                                    <p><label for=""><input type="checkbox" /> Juices</label></p>

                                    <p><label for=""><input type="checkbox" /> Dairy</label></p>

                                    <p><label for=""><input type="checkbox" /> Fruit</label></p>

                                    <p><label for=""><input type="checkbox" /> Vegetables</label></p>

                                    <p><label for=""><input type="checkbox" /> Dry Food</label></p>
                                </div>
                                <br />
                                <hr />
                            </li>

                            <li class="aside-item">
                                <div class="slider">
                                    <p>Price</p>
                                    <input type="range" class="price-range" />
                                </div>
                                <br />
                                <hr />
                            </li>

                            <li class="aside-item">
                                <div class="size">
                                    <p>Sizes</p>
                                    <div class="grid-container size-container">
                                        <button class="btn ">250g</button>
                                        <button class="btn ">300g</button>
                                        <button class="btn ">350g</button>
                                        <button class="btn">500g</button>
                                        <button class="btn">1kg</button>
                                        <button class="btn">2kg</button>

                                    </div>


                                </div>
                            </li>

                        </ul>
                    </div>
                </div>

                <div class="">
                    <div class="container">

                        <div class="grid-container product-list">
                            <div class="item1">
                                <div class="card">
                                    <img class="card-img" srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                    <hr />
                                    <div class="description">
                                        <h5>Organic Fruits & Veggies
                                        </h5><br />
                                        <p>
                                            200$</p>
                                        <div class="card-btn ">
                                            <button class="btn dark ">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item2">
                                <div class="card">
                                    <img class="card-img" srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                    <hr />
                                    <div class="description">
                                        <h5>Organic Fruits & Veggies
                                        </h5><br />
                                        <p>
                                            200$</p>
                                        <div class="card-btn ">
                                            <button class="btn dark ">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item3">
                                <div class="card">
                                    <img class="card-img" srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                    <hr />
                                    <div class="description">
                                        <h5>Organic Fruits & Veggies
                                        </h5><br />
                                        <p>
                                            200$</p>
                                        <div class="card-btn ">
                                            <button class="btn dark ">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="item4">
                                <div class="card">
                                    <img class="card-img" srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                    <hr />
                                    <div class="description">
                                        <h5>Organic Fruits & Veggies
                                        </h5><br />
                                        <p>
                                            200$</p>
                                        <div class="card-btn ">
                                            <button class="btn dark ">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="item5">
                                <div class="card">
                                    <img class="card-img" srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                    <hr />
                                    <div class="description">
                                        <h5>Organic Fruits & Veggies
                                        </h5><br />
                                        <p>
                                            200$</p>
                                        <div class="card-btn ">
                                            <button class="btn dark ">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="item6">
                                <div class="card">
                                    <img class="card-img" srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                    <hr />
                                    <div class="description">
                                        <h5>Organic Fruits & Veggies
                                        </h5><br />
                                        <p>
                                            200$</p>
                                        <div class="card-btn ">
                                            <button class="btn dark ">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <Footer/>
        </>

    )
}