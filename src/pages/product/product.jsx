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
                  </div>
                </li>
              </ul>
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
