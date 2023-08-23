import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id, navigate, API]);

  const deleteProduct = () => {
    axios
      .delete(`${API}/products/${id}`)
      .then(() => {
        navigate(`/products`);
      })
      .catch((c) => console.error("catch", c));
  };

  const handleDelete = () => {
    deleteProduct();
  };

  return (
    <>
      <div className="show">
        <img src={product.url} alt={product.product_name} />
        <p className="label">
          <span className="bold">Favorit:</span>{" "}
          {product.is_favorite ? <span>⭐</span> : <span>✩</span>}
        </p>
        
        <p className="label">
          <span className="bold">Price:</span> {product.price}
        </p>
        <p className="label">
          <span className="bold">Product:</span> {product.product_name}
        </p>
        <p className="label">
          <span className="bold">Type:</span> {product.product_type}
        </p>
        <p className="label">
          <span className="bold">Calories:</span> {product.calories}
        </p>

        <div className="showNavigation">
          <div>
            {" "}
            <Link to={`/products`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/products/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
