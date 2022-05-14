import React, {useEffect, useState} from 'react'
import { useNavigate} from 'react-router-dom'
import { Button , Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../ProductCard'
import { useSearchParams } from 'react-router-dom';

const Mainpage = ({loginCheck}) => {

    const navigate = useNavigate()
    const [search, setSearch] = useSearchParams();


      const test1 = ()=> {
        navigate('./test1')
      }
      const test2 = ()=> {
        navigate('./test2')
      }

      const [productsList, setProductsList] = useState([])
      const getProducts = async() => {
        let searchQuery = search.get('q') || "";
        let url = `http://localhost:5001/products?q=${searchQuery}`;
        let respone = await fetch(url);
        let data = await respone.json();
        setProductsList(data)
      }
      useEffect (() => {
        getProducts()
      },[ search ])

  return (
    <div>


<Button onClick={test1}>가위바위보</Button>
        <Button onClick={test2}>날씨</Button>
   <Container>
            <Row>
              {productsList.map((menu,index) => (        
                <Col  id="card" lg={3} key={index}>
                <ProductCard  item={menu} loginCheck={loginCheck} />
                </Col>
              ))}
            </Row>
            </Container>


    </div>
  )
}

export default Mainpage