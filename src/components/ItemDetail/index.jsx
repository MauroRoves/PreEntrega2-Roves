import Figure from 'react-bootstrap/Figure';
import { useParams } from 'react-router-dom';
import products from '../../mocks/products';

function ItemDetail () {
    
    
    const { id } = useParams();
    
    const selectedProduct = products.find((el => el.id === parseInt(id)));

    console.log(selectedProduct);
    
    
    return (
      <Figure>
        <Figure.Image
          width={300}
          height={300}
          alt="171x180"
          src={selectedProduct.img}
        />
        <Figure.Caption>
          <p>{selectedProduct.precio}</p>
        
        </Figure.Caption>
      </Figure>
    );
  }
  
  export default ItemDetail;


















/* 




  import Figure from 'react-bootstrap/Figure';
  import { useParams } from 'react-router-dom';
  import products from '../../mocks/products';
  
  function ItemDetail () {
      
      const { id } = useParams();
      const selectedProduct = products.find((el => el.id === parseInt(id)));
      
      
      
      return (
        <Figure>
          <Figure.Image
            width={600}
            height={600}
            alt="171x180"
            src={selectedProduct.img}
          />
          <Figure.Caption>
            <p>asd</p>
          </Figure.Caption>
        </Figure>
      );
    }
    
    export default ItemDetail;


 */
