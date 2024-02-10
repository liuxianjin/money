import React from 'react';
import styled from "styled-components";
import {Link, Route, Routes, Navigate} from "react-router-dom";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`
const Main = styled.div`
    flex-grow: 1;
    overflow: auto;
`
const Nav = styled.nav`
    border: 1px green solid;

    > ul {
        display: flex;
        >li{
            width: 33.3%;
            text-align: center;
            padding: 16px;
        }
    }
`

function App() {
  return (
    <Wrapper>
      <Main>
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>}></Route>
          <Route
            path="/tags"
            element={<Tags/>}
          />
          <Route
            path="/money"
            element={<Money/>}
          />
          <Route
            path="/statistics"
            element={<Statistics/>}
          />
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </Main>
      <Nav>
        <ul>
          <li>
            <Link to="/tags">标签页</Link>
          </li>
          <li>
            <Link to="/money">账本页</Link>
          </li>
          <li>
            <Link to="/statistics">统计页</Link>
          </li>
        </ul>
      </Nav>
    </Wrapper>
  );
}

function NoMatch() {
  return (
    <h1>404</h1>
  )
}

function Tags() {
  return (
    <h1>标签页</h1>
  )
}

function Money() {
  return (
    <h1>账本页</h1>
  )
}

function Statistics() {
  return (
    <h1>统计页</h1>
  )
}


export default App;
