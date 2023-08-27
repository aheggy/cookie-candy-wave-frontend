import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function ProductEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [product, setProduct] = useState({
    product_name: "",
    product_type: "",
    calories: "",
    price: "",
    url: "",
    is_favorite: false,
  });

  const updateProduct = (updatedProduct, id) => {
    axios
      .put(`${API}/products/${id}`, updatedProduct)
      .then(
        () => {
          navigate(`/products/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setProduct({ ...product, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setProduct({ ...product, is_favorite: !product.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/products/${id}`).then(
      (response) => setProduct(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProduct(product, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Product_name">Product Name:</label>
        <input
          id="product_name"
          value={product.product_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Product"
          required
        />
        <label htmlFor="Product_type">Product Type:</label>
        <input
          id="product_type"
          value={product.product_type}
          type="text"
          onChange={handleTextChange}
          placeholder="Type of Product"
          required
        />
        <label htmlFor="calories">Calories:</label>
        <input
          id="calories"
          value={product.calories}
          type="text"
          onChange={handleTextChange}
          placeholder="calories"
          required
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          value={product.price}
          type="text"
          onChange={handleTextChange}
          placeholder="price"
          required
        />
        {/* <label htmlFor="last_updated">last_updated:</label>
        <input
          id="last_updated"
          value={product.last_updated}
          type="text"
          onChange={handleTextChange}
          placeholder="last_updated"
          required
        /> */}

        <label htmlFor="url">Image URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={product.url}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={product.is_favorite}
        />
        <br />
        <input type="submit" />
      </form>
      <Link to={`/products/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}
