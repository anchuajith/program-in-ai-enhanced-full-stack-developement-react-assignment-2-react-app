import {useParams} from 'react-router-dom';
import { useEffect} from 'react';
import {useState} from 'react';

function ProductDetails(){

    const params = useParams();
    const [product,setProduct] = useState([]);

    useEffect(() => {
        
        fetch("https://dummyjson.com/products/"+params.id)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
            });

    }, []);

    return (
        
        <div>
            <h6>Product</h6>
                <p key={product.id}>
                    {product.title}
                </p>
                <p>{product.price}</p>
            
        </div>
        
    )
}
export default ProductDetails;