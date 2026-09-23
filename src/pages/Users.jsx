import {useParams} from 'react-router-dom';
import { useEffect} from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function Products(){

    const params = useParams();
    const [products,setProducts] = useState([]);

    useEffect(() => {
        
        fetch("https://dummyjson.com/products")
            .then(response => response.json())
            .then(data => {
                setProducts(data.products);
            });

    }, []);

    return (
        
        <div>
            <h1>Products</h1>

            {products.map(product => (
                <p><Link to={`/products/${product.id}`}>{product.title}</Link></p>
            ))}
        </div>
        
    )
}
export default Products;