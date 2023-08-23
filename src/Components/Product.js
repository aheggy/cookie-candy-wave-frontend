
import { Link } from "react-router-dom"

export default function Product({ product }) {
    return (
        <div className="product">
            <p className="label"><span className="bold centered-type">{product.product_type}</span></p>
            <img src={product.url} alt={product.product_name} />
            <p className="label"><span className="bold">Price: </span>${product.price}</p>
            <p className="label"><span className="bold">Favorit:</span> {product.is_favorite ? (
                <span>⭐</span>
            ) : (
                <span>✩</span>
            )}</p>
            <Link to={`/products/${product.id}`}><span className="bold"></span> {product.product_name}</Link>
        </div>
    )
}
