import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";
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
      > a {
        display: flex;
        padding: 4px 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      > a.active {
        color: yellowgreen;
        .icon {
          fill: yellowgreen;
        }
      }
      .icon {
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
          <NavLink to="/tags">
            <Icon name="tags"/>
            标签
          </NavLink>
        </li>
        <li>

          <NavLink to="/money">
            <Icon name="money"/>账本
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics">
            <Icon name="charts"/>统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}


export default Nav;
