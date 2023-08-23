import axios from "axios"
import { useState, useEffect } from "react"
import Product from "./Product"

const API = process.env.REACT_APP_API_URL


export default function Products(){

    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios
        .get(`${API}/products`)
        .then((response) => {
            setProducts(response.data)
        })
        .catch((error) => console.warn("catch", error))
    },[])
    console.log(products)


    return (
        <div className="products">
            {products.map((product) => {
                return <Product key={product.id} product={product}/>
            })}
        </div>
    )

}