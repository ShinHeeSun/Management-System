import React from 'react';
import logo from '../img/logo.png';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser  } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom'


const Navbar = ({loginCheck, setLoginCheck}) => {
  const navigate = useNavigate();
const navList = [
    '베스트','sale','한식', '중식', '일식', '간식', '음료',
]

const Home =()=> {
  navigate('/');
}

const goToJoin = () => {
  navigate('./JoinPage')
}

const goToLogin = () =>{
  navigate('/LoginPage')
}

const search = (event) => {
  if (event.key === 'Enter') {
    let searchKey = event.target.value;
    navigate (`/?q=${searchKey}`)
  }
}
const goCart = () =>{
  if(loginCheck === true){
navigate("/CartPage")
} else{
  navigate('/LoginPage')
}
}
  return (
    <Container id="header">
      <Container id="loginJoin"> 
     
      {loginCheck ? (
         <div className="loginButton" onClick={() => setLoginCheck(false)}>
        
         <FontAwesomeIcon icon={faUser} />
         <span>로그아웃</span>
       </div>
      ) : (
          <div className="loginButton" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
        &nbsp;
        <span>로그인</span>
        </div>
      )      }

        <div className='join' onClick={goToJoin}>회원가입</div>

        <div className='cart' onClick={goCart}>
        <FontAwesomeIcon icon={faCartArrowDown} />
         &nbsp;
       <span>장바구니</span>
      </div>
      </Container>
      
      <span className="logoImg">
          <img className="logo" src={logo} alt="" onClick={Home} />
      </span>

      <Container id='navMenu1' className='navMenu'>
<ul className='navList'>
{navList.map(menu=> <li key={menu}>{menu}</li>)}
</ul>

    
     <div className='search'>
     <input  type='text' onKeyPress={(event) => search(event)} />
         <FontAwesomeIcon icon={faSearch} className="qkqh" />
       
     </div>

      </Container>
    </Container>
  );
};

export default Navbar;
