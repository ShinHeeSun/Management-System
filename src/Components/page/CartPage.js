import React,{useEffect, useState} from 'react'
import { Container } from 'react-bootstrap';
import CartItem from '../CartItem'
const CartPage = () => {
  const [cartMenuItem, setCartMenuItem] = useState([]);
 



const getCartMenu = async() => {
  let url=`http://localhost:5001/CartPage/`;
  let respone = await fetch(url);
  let data = await respone.json();
  setCartMenuItem(data)
console.log(cartMenuItem[0])
} 

  useEffect(()=>{
    getCartMenu();
  },[])

  return (
    <Container id="cartPage" >
   
       <div className='cartTitle'>
          <span className='cartCheckBox'>
          <input type="checkbox"></input>
          </span>
            <p style={{width:'500px'}}>상품 정보</p>
            <p>수량</p>
            <p>상품 금액</p>
            <p>배송 정보</p>
          </div>

      {cartMenuItem.map((menu, index)=> (
        <div key={index}>
        <CartItem  item={menu} />
        </div>
      ))}

       <div className="cartButton">

       <span className='cartCheckBox'>
        <input type="checkbox"></input>
        </span>

        <button>전체 상품 삭제</button>
        <button>선택 상품 삭제</button>
       </div>

       <div className="cartMoney">
        상품 금액 + 배송비 - 할인 금액 = 상품 총 가격
       </div>
       <div className="cartOrder">
         <button>주문 하기</button>
       </div>


    </Container>
  )
}

export default CartPage