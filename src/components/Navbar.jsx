import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 10vh;
  background: black;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 50%;
  height: 100%;
  margin-left: auto;
  li a {
    color: white;
    text-decoration: none;
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    position: fixed;
    background: black;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    transition: all 1s ease-out;
    clip-path: ${props =>
      props.open ? "circle(200% at 90% -10%)" : "circle(100px at 90% -10%)"};
    -webkit-clip-path: ${props =>
      props.open ? "circle(200% at 90% -10%)" : "circle(100px at 90% -10%)"};
    pointer-events: ${props => (props.open ? "all" : "none")};

    li {
      opacity: ${props => (props.open ? "1" : "0")};
      a {
        font-size: 25px;
      }
    }
    li:nth-child(1) {
      transition: all 0.25s ease 0.2s;
    }
    li:nth-child(2) {
      transition: all 0.25s ease 0.4s;
    }
    li:nth-child(3) {
      transition: all 0.25s ease 0.6s;
    }
  }
`;

const Hamburger = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    cursor: pointer;
    right: 5%;
    top: 50%;
    transform: translate(-5%, -50%);
    z-index: 1;
  }
`;

const Line = styled.div`
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 3px;
    background: white;
    margin: 5px;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const hamburgerClick = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      <Nav>
        <Hamburger onClick={() => hamburgerClick()}>
          <Line />
          <Line />
          <Line />
        </Hamburger>
        <Links open={open}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </Links>
      </Nav>
    </>
  );
};

export default Navbar;
