import  {useState, useEffect} from 'react';

import axios from 'axios';

const AllProducts = async () => {
    const [products, setProducts] = useState([]);
    // console.log(products);


    useEffect(async () => {
     const data = await  axios.get("http://localhost:3001/products")
        console.log(data)
    }, []);

    return (
        <div>
            {/*<table className="table">*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th scope="col">#</th>*/}
            {/*        <th scope="col">First</th>*/}
            {/*        <th scope="col">Last</th>*/}
            {/*        <th scope="col">Handle</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    {*/}
            {/*        products.map((product,index) => (*/}
            {/*            <tr key={index}>*/}
            {/*                <td>{product.id}</td>*/}
            {/*                <td>{product.name}</td>*/}
            {/*                <td>{product.price}</td>*/}
            {/*                <td>{product.stock}</td>*/}
            {/*                <td>{product.description}</td>*/}
            {/*            </tr>*/}
            {/*        ))*/}
            {/*    }*/}

            {/*    </tbody>*/}
            {/*</table>*/}
        </div>
    );
};

export default AllProducts;
