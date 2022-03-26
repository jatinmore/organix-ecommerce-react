import '../../styles/style.css';
export default function Navigation ()
{
    return(
    <nav className="nav grid  fixed bg-light box-shadow">
    <a className="brand">Organix</a>
    <ul>
        <li className="nav-link"><a href="/pages/product/product.html" className="nav-link">SHOP</a></li>
        <li className="nav-link"><a href="/pages/login-signup/login.html" className="nav-link">LOGIN</a></li>
        <li className=""><input type="text" className="input-f" placeholder="Search" /></li>

        <button className="btn-badge">
            <a href="/pages/Cart/cart.html" className="link"><i className="fas fa-shopping-cart"></i>
            </a>
            <span className="count">3</span>
        </button>

        <button className="btn-badge">
            <a href="/pages/wishlist/wishlist.html" className="link"><i className="fas fa-heart"></i>
            </a>
            <span className="count">4</span>
        </button>
    </ul>
</nav>

)
}