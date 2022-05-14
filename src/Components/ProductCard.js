import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ item, loginCheck }) => {
  
  const navigate = useNavigate ();
  const showDetaill =() => {
    if(loginCheck === true){
      navigate(`/Products/${item.id}`)
    }else {
      navigate('/LoginPage')
    }
  }
  return (
    <>
      <Card onClick={showDetaill} style={{ width: '18rem' , cursor:'pointer'}}>
      <span className='newMenu'> {item?.new === true ? '신상품' : ''}</span>
        <Card.Img variant="top" src={item?.img} />
        <Card.Body id="cardBody">
          <Card.Title>
            {item?.title}
          </Card.Title>
          <Card.Text>  {item?.body}</Card.Text>
          <Button id="priceButton" variant="primary">$ {item?.price}</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
