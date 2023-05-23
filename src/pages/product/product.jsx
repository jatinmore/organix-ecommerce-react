<<<<<<< HEAD
import './product.css'
import { Navigation,Footer } from '../../components'
export default function Product()
{
    return(
        <><Navigation />
        <div className="container-product">
            <div className="flex-container">
                <div className="sidebar">
                    <div className="aside">
                        <span className="aside-header">Filter</span>
                        <br />
                        <hr />

                        <ul className="list">
                            <p>Rating</p>
                            <li className="aside-item">
                                <div className="rating">
                                    <label for=""><p><input type="checkbox" /> 2<i className="fas fa-star"></i> and above</p>
                                    </label>
                                    <label for=""><p><input type="checkbox" /> 4<i className="fas fa-star"></i> and above</p>
                                    </label>
                                </div>
                                <br />
                                <hr />
                            </li>
                            <li className="aside-item">
                                <p>Categories</p>
                                <div className="category">
                                    <p><label for=""><input type="checkbox" /> Juices</label></p>

                                    <p><label for=""><input type="checkbox" /> Dairy</label></p>

                                    <p><label for=""><input type="checkbox" /> Fruit</label></p>

                                    <p><label for=""><input type="checkbox" /> Vegetables</label></p>

                                    <p><label for=""><input type="checkbox" /> Dry Food</label></p>
                                </div>
                                <br />
                                <hr />
                            </li>

                            <li className="aside-item">
                                <div className="slider">
                                    <p>Price</p>
                                    <input type="range" className="price-range" />
                                </div>
                                <br />
                                <hr />
                            </li>

                            <li className="aside-item">
                                <div className="size">
                                    <p>Sizes</p>
                                    <div className="grid-container size-container">
                                        <button className="btn ">250g</button>
                                        <button className="btn ">300g</button>
                                        <button className="btn ">350g</button>
                                        <button className="btn">500g</button>
                                        <button className="btn">1kg</button>
                                        <button className="btn">2kg</button>

                                    </div>
=======
import "./product.css";
import { Navigation, Footer } from "../../components";
import { products } from "../../backend/db/products";
import { ReducerFunc } from "../../reducer/reducer";
export default function Product() {
  const sortedProducts = (product, sortBy) => {
    if (sortBy === "PRICE_HIGH_TO_LOW")
      return [...product].sort((a, b) => b.discountPrice - a.discountPrice);
    else if (sortBy === "RATING_HIGH_TO_LOW")
      return [...product].sort((a, b) => b.rating - a.rating);
>>>>>>> 6c421625141ee4f34f7b8db347c59c1d0c16c52e


const finalProducts = sortedProducts(ratingFiltered, state.sortBy);


  return (
    <>
      <Navigation />
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
                    <label for="">
                      <p>
                        <input type="checkbox" onChange={() => dispatch({ type: "RATING_HIGH_TO_LOW" })}
 /> 2<i class="fas fa-star"></i>{" "}
                        and above
                      </p>
                    </label>
                    <label for="">
                      <p>
                        <input type="checkbox" /> 4<i class="fas fa-star"></i>{" "}
                        and above
                      </p>
                    </label>
                  </div>
                  <br />
                  <hr />
                </li>
                <li class="aside-item">
                  <p>Categories</p>
                  <div class="category">
                    <p>
                      <label for="">
                        <input type="checkbox" /> Juices
                      </label>
                    </p>

                    <p>
                      <label for="">
                        <input type="checkbox" /> Dairy
                      </label>
                    </p>

                    <p>
                      <label for="">
                        <input type="checkbox" /> Fruit
                      </label>
                    </p>

                    <p>
                      <label for="">
                        <input type="checkbox" /> Vegetables
                      </label>
                    </p>

                    <p>
                      <label for="">
                        <input type="checkbox" /> Dry Food
                      </label>
                    </p>
                  </div>
                  <br />
                  <hr />
                </li>

                <li class="aside-item">
                  <div class="slider">
                    <p>Price</p>
                    <input type="range" class="price-range" />
                    <p>
                      <label>
                        <input type="radio" name="sort" id="" />
                        Low to High
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="radio" name="sort" id=""  />
                        High to Low
                      </label>
                    </p>
                    <button className="btn sm ">clear all</button>
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
<<<<<<< HEAD
                </div>

                <div className="">
                    <div className="container">

                        <div className="grid-container product-list">
                            <div className="item1">
                                <div className="card">
                                    <img className="card-img" srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
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
                            </div>
                            <div className="item2">
                                <div className="card">
                                    <img className="card-img" srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
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
                            </div>
                            <div className="item3">
                                <div className="card">
                                    <img className="card-img" srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
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
                            </div>

                            <div className="item4">
                                <div className="card">
                                    <img className="card-img" srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
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
                            </div>

                            <div className="item5">
                                <div className="card">
                                    <img className="card-img" srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
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
                            </div>

                            <div className="item6">
                                <div className="card">
                                    <img className="card-img" srcset="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
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
                            </div>

                        </div>
                    </div>
                </div>
=======
                  </div>
                </li>
              </ul>
>>>>>>> 6c421625141ee4f34f7b8db347c59c1d0c16c52e
            </div>
          </div>

          <div class="">
            <div class="container">
              <div className="grid-container product-list">
                {products.map((item) => (
                  <>
                    <div className={item.id}>
                      <div className="card">
                        <img class="card-img" src={item.img} />
                        <div class="description">
                          <h5>{item.name}</h5>
                          <br />
                          <p>{item.price}$</p>
                          <br />
                          <div className="text-left">
                           {item.rating}<i className="fas fa-star"></i>
                            </div>
                          <div class="card-btn ">
                            <button class="btn dark ">Add</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <Footer />
    </>
  );
}}
