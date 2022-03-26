import './wishlist.css'
import { Navigation } from '../../components'
export default function Wishlist()
{
    return (
        <><Navigation />
        <div className="container">
            <div className="grid-container product-list">
                <div className="item1">
                    <div className="card card-b">
                        <img className="card-img" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                        <hr />

                        <div className="description">
                            <h5>Organic Fruits & Veggies
                            </h5><br />
                            <p>
                                200$</p>
                            <div className="card-btn ">
                                <button className="btn dark ">Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="wishlist-badge">
                        <button className="btn-round"><i className="fas fa-heart wishlist-icon"></i>
                        </button>
                    </div>
                </div>
                <div className="item2">
                    <div className="card card-b">
                        <img className="card-img" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                        <hr />

                        <div className="description">
                            <h5>Organic Fruits & Veggies
                            </h5><br />
                            <p>
                                200$</p>
                            <div className="card-btn ">
                                <button className="btn dark ">Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="wishlist-badge">
                        <button className="btn-round"><i className="fas fa-heart wishlist-icon"></i>
                        </button>
                    </div>
                </div>
                <div className="item3">
                    <div className="card card-b">
                        <img className="card-img" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                        <hr />

                        <div className="description">
                            <h5>Organic Fruits & Veggies
                            </h5><br />
                            <p>
                                200$</p>
                            <div className="card-btn ">
                                <button className="btn dark ">Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="wishlist-badge">
                        <button className="btn-round"><i className="fas fa-heart wishlist-icon"></i>
                        </button>
                    </div>
                </div>

                <div className="item4">
                    <div className="card card-b">
                        <img className="card-img" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                        <hr />

                        <div className="description">
                            <h5>Organic Fruits & Veggies
                            </h5><br />
                            <p>
                                200$</p>
                            <div className="card-btn ">
                                <button className="btn dark ">Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="wishlist-badge">
                        <button className="btn-round"><i className="fas fa-heart wishlist-icon"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div></>

    )
}