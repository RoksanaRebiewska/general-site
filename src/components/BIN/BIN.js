import React from 'react';
import styled from 'styled-components';


const Button = styled.a`
font-size: 1em;
  padding: 10px;
  color: #000;
  border: 2px solid #06D85F;
  border-radius: 20px/50px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-out;

`;
const BIN = styled.div` 
  margin: 14px;
`;

const Overlay = styled.div` 
 position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
   :target{
    visibility: visible;
  opacity: 1;
  z-index:100;
  }
`;

const Popup = styled.div` 
    margin: 70px auto;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    width: 80%;
    position: relative;
    transition: all 5s ease-in-out;
`;

const Content = styled.div`   
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 30%;
    overflow: auto;
`;

const PopupBox = styled.div`   
 display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px;
    img{
      margin-bottom:10px;
    }
`;

const Close = styled.a` 
   position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
`;


const ButtonRadius = styled.button`
  display:flex;
  background:#005EEF;
  border:none;
  padding:18px 55px;
  color:#fff;
  text-transform:uppercase;
  margin:60px auto 0 auto;
  border-radius:30px;
  transition:.5s;
  font-weight:bold;
  &:hover{
    background:#004cc2;
  }
`;

export default class extends React.Component{
  render() {
    return (
      
      <BIN>
      <Button href="#popup1">BUY IT NOW</Button>
      <Overlay id="popup1" >
    <Popup >
      <h2>Here i am</h2>
      <Close  href="#">&times;</Close>
      <Content class="content">
        <PopupBox >
          <img src="https://assets.allegrostatic.com/metrum/brand/allegro-347440b030.svg" alt="retailer icon"></img>
          <Button href="https://www.gazeta.pl" target="_blank">KUP TERAZ</Button>
        </PopupBox>
        <PopupBox >
          <img src="https://assets.allegrostatic.com/metrum/brand/allegro-347440b030.svg" alt="retailer icon"></img>
          <Button href="https://www.gazeta.pl" target="_blank" >KUP TERAZ</Button>
        </PopupBox>
        
      </Content>
    </Popup>
  </Overlay>
    </BIN>
   
  
    );
  }
}


