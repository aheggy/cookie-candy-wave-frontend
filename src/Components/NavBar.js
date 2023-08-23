import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <nav>
            <h1>
                <Link to="/products">Products</Link>
            </h1>
            <button>
                <Link to="products/new">New Product</Link>
            </button>
        </nav>
    )
}