import "./product.css";
import { Navigation, Footer } from "../../components";
const product = [
  {
    id: "item1",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Organic Veggies",
    rating: 5,
    price: 200,
  },
  {
    id: "item2",
    img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "Organic Apples",
    rating: 4,
    price: 150,
  },
  {
    id: "item3",
    img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "Organic Orange Juice",
    rating: 3,
    price: 100,
  },

  {
    id: "item4",
    img: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWxtb25kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    name: "Organic Almonds",
    rating: 2,
    price: 350,
  },
  {
    id: "item5",
    img: "https://images.unsplash.com/photo-1635436338433-89747d0ca0ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG9yZ2FuaWMlMjBtaWxrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    name: "Organic Milk",
    rating: 3,
    price: 50,
  },
  {
    id: "item6",
    img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    name: "Organic Strawberries",
    rating: 1,
    price: 200,
  },
];

export default function Product() {
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
                        <input type="checkbox" /> 2<i class="fas fa-star"></i>{" "}
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
                        <input type="radio" name="sort" id="" />
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
                {product.map((item) => (
                  <>
                    <div className={item.id}>
                      <div className="card">
                        <img class="card-img" src={item.img} />
                        <div class="description">
                          <h5>{item.name}</h5>
                          <br />
                          <p>{item.price}$</p>
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
}
