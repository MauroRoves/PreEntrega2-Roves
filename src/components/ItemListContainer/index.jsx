import "./ItemListContainer.css";
import { useEffect, useState} from "react";
import Products from "../../mocks/products";
import ItemList from "../ItemList";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ItemListContainer({ categoryId, isCategoryRoute }) {

  const [products, setProducts] = useState([]);

  console.log({categoryId});

  useEffect(() => {
    const productsPromise = new Promise((resolve, reject) => 
    setTimeout(() => resolve(Products), 2000)
  );
  
  productsPromise
  .then((response) => {
    if (isCategoryRoute) {
    const productsFiltered = response.filter(
      (product) => product.category === categoryId
    );
    setProducts(productsFiltered);
  }else {
    setProducts(response);
  }
})
  .catch((err) => console.log(err));
}, [categoryId]);
  

  
  return (     
        <Container>
          <Row>
            <Col >
              <ItemList products={products}/>
            </Col>
          </Row>
        </Container>

        );
}

export default ItemListContainer;
  



{/* <div className="itemList container-fluid d-flex justify-content-center">
<ItemList products={products}/>
</div> */}