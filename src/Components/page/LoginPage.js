import React, {useEffect, useState}  from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Container } from 'react-bootstrap';

const Loginpage = ({setLoginCheck}) => {
  const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
 
    const navigate = useNavigate();
 
  const loginUser = () => 
  {
  loginId.filter((obj) =>
     {
    if (obj['id'] === inputId) 
     { 
      navigate('/')
    setLoginCheck(true) 
  } else if(obj['password'] === inputPw){
      navigate('/')
      setLoginCheck(true)
    }
    else{ console.log('없음'); }
    });
}



  const [loginId,setLoginId] = useState({});

  const getLogin = async() => {
  let url = `http://localhost:5001/user/`;
  let respone = await fetch(url);
  let users = await respone.json();
  setLoginId(users)
  }
  useEffect (()=> {
  getLogin();
  }, [])



  return (
    <Container id="loginModal">

      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control
           value={inputId} 
           onChange={(e) => setInputId(e.target.value)}
           type="text" placeholder="Id를 입력해주세요" />
        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          value={inputPw}
          onChange={(e) => setInputPw(e.target.value)}
           type="password" placeholder="PASSWORD를 입력해주세요" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
    
        </Form.Group>
        <Button variant="outline-primary" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
}

export default Loginpage