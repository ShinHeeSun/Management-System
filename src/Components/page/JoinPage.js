import React, { useState } from 'react';
import axios from 'axios';

import { Container } from 'react-bootstrap';

const JoinPage = () => {

    const [id, setId] = useState('');
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);
  
    const onSubmit = (e) => {
      e.preventDefault();
      /**검증 로직 만들기
       * 1. 비밀번호와 비밀번호 체크가 다를 경우를 검증한다
       * 2. 약관 동의를 확인한다.
       */
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      if (!term) {
        return setTermError(true);
      };
 
      axios({
        method : 'post',
        url: 'http://localhost:5001/user',
        data: {
          id,
          nick,
          password
        }
      });
    };

  
    // Coustom Hook 이전
    const onChangeId = (e) => {
      setId(e.target.value);
    };
    const onChangeNick = (e) => {
      setNick(e.target.value);
    };
    const onChangePassword = (e) => {
      setPassword(e.target.value);
    };
    const onChangePasswordChk = (e) => {
      //비밀번호를 입력할때마다 password 를 검증하는 함수
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    };
    const onChangeTerm = (e) => {
      //체크박스 초기화
      setTermError(false);
      setTerm(e.target.checked);
    };
    
    return (
      <Container>
        <form
    id='join'
          onSubmit={onSubmit}
        >
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <input name="user-id" value={id} required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <br />
            <input
              name="user-nick"
              value={nick}
              required
              onChange={onChangeNick}
            />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <input
              name="user-password"
              type="password"
              value={password}
              required
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호체크</label>
            <br />
            <input
              name="user-password-check"
              type="password"
              value={passwordCheck}
              required
              onChange={onChangePasswordChk}
            />
            {passwordError && (
              <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>
            )}
          </div>
          <div>
            <input
              className="form-check-input checkbox "
              type="checkbox"
              id="flexCheckDefault"
              name="user-term"
              value={term}
              onChange={onChangeTerm}
            ></input>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              동의 합니까?
            </label>
            {termError && (
              <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>
            )}
          </div>
          <div style={{ marginTop: 10 }}>
            <button className='btn btn-outline-secondary' type="submit" >
              가입하기
            </button>
          </div>
        </form>
      </Container>
    );
  }
  


export default JoinPage