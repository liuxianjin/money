import React from 'react';
import styled from "styled-components";
import {Route, Routes, Navigate} from "react-router-dom";
import Nav from "./components/Nav";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`
const Main = styled.div`
    flex-grow: 1;
    overflow: auto;
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
      <Nav />
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
