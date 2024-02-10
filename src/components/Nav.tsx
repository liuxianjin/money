import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
import Icon from "./Icon";
const NavWrapper = styled.nav`
    height: 56px;
    line-height: 24px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    
    > ul {
        display: flex;

        > li {
            width: 33.3%;
            text-align: center;
            display: flex;
            padding: 4px 0;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .icon{
                width: 24px;
                height: 24px;
            }
        }
    }
`
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="tags" />
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Icon name="money" />
          <Link to="/money">账本</Link>
        </li>
        <li>
          <Icon name="charts" />
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}


export default Nav;
