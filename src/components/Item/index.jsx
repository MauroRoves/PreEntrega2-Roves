import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function Item ({product}) {
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.precio}
        </Card.Text>
        <Button variant="primary">Abrir</Button>
      </Card.Body>
    </Card>
    );
}

export default Item;