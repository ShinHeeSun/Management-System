import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import { useParams} from 'react-router-dom'
import axios from 'axios';
// import { Button } from 'react-bootstrap';

const ProductDetaill = () => {
    // const navigate = useNavigate()
    const [choiceNumber,setChoiceNumber] = useState(1)
  const [productsDetaill, getProductsDetaill] = useState([]);
  const {id} = useParams()

const getProductDetaill = async() => {
  let url = `http://localhost:5001/products/${id}`;
        let respone = await fetch(url);
        let data = await respone.json();
        getProductsDetaill(data)
}
  useEffect (()=> {
    getProductDetaill();
  }, [])

const addToCart = () => {
  axios({
    method : 'post',
    url: 'http://localhost:5001/CartPage',
    data: {
      id: productsDetaill?.id,
      img : productsDetaill?.img,
      title: productsDetaill?.title,
      pirce: productsDetaill?.price,
    }
  });
}
  return (
    <Container>
      <form>
      <div id="detaillMenu">
        <div className="detaillImg">
         <img src={productsDetaill?.img} alt='' />
        </div>
        <div className='detaillIntroduce'>
          <span className='detaillNew'>
            {productsDetaill?.new === true ? '신상품' : ''}
            </span>

          <span  className='detailltitle'> 
           {productsDetaill?.title}
           </span>

          <span  className='detaillbody'>  
             {productsDetaill?.body}
             </span>

             <span className='detaillKcal'>
          Kcal :   {productsDetaill?.kcal}
        </span>

        <span className='detaillChoiceNumber'>
        구매 수량 : {productsDetaill?.choice === true ? '' : ''} &nbsp; 
         <button onClick={()=>{setChoiceNumber(choiceNumber - 1)}}>-</button>
         &nbsp; {choiceNumber} &nbsp; 
         <button onClick={()=>{setChoiceNumber(choiceNumber + 1)}}>+</button>
        </span>

           <p className='detaillprice'>    
          총 상품 금액 : {productsDetaill?.price * choiceNumber}
          </p>

        <div className='detaillButton'>
          <button onClick={addToCart}>장바구니</button>
          <button>구매하기</button>
        </div>
        </div>
        </div>
      <div  className="detaillDetaillImg">
      <img src={productsDetaill?.img } alt=''/>
      <img src={productsDetaill?.img} alt='' />
      <img src={productsDetaill?.img} alt='' />
      <img src={productsDetaill?.img} alt='' />
      </div>
      </form>
    </Container>
  )
}

export default ProductDetaill