import './wishlist.css'
import { Navigation } from '../../components'
export default function Wishlist()
{
    return (
        <><Navigation />
        <div class="container">
            <div class="grid-container product-list">
                <div class="item1">
                    <div class="card card-b">
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
                    <div class="wishlist-badge">
                        <button class="btn-round"><i class="fas fa-heart wishlist-icon"></i>
                        </button>
                    </div>
                </div>
                <div class="item2">
                    <div class="card card-b">
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
                    <div class="wishlist-badge">
                        <button class="btn-round"><i class="fas fa-heart wishlist-icon"></i>
                        </button>
                    </div>
                </div>
                <div class="item3">
                    <div class="card card-b">
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
                    <div class="wishlist-badge">
                        <button class="btn-round"><i class="fas fa-heart wishlist-icon"></i>
                        </button>
                    </div>
                </div>

                <div class="item4">
                    <div class="card card-b">
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
                    <div class="wishlist-badge">
                        <button class="btn-round"><i class="fas fa-heart wishlist-icon"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div></>

    )
}