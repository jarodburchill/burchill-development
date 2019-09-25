import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  top: 0;
  position: fixed;
  background: ${props => props.color};
  z-index: 2;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  color: ${props => props.color};
  margin-left: 5%;
  z-index: 3;
`;

const Links = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 50%;
  height: 100%;
  li a {
    color: ${props => props.color};
    text-decoration: none;
    font-size: 16px;
  }
`;

const HamburgerLinks = styled(Links)`
  @media screen and (max-width: 768px) {
    position: fixed;
    background: black;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    transition: all 0.75s ease-out;
    clip-path: ${props =>
      props.open ? "circle(200% at 95% -10%)" : "circle(100px at 95% -10%)"};
    -webkit-clip-path: ${props =>
      props.open ? "circle(200% at 95% -10%)" : "circle(100px at 95% -10%)"};
    pointer-events: ${props => (props.open ? "all" : "none")};

    li {
      transition: all 0.25s ease-out;
      opacity: ${props => (props.open ? "1" : "0")};
      a {
        font-size: 25px;
      }
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
    z-index: 3;
  }
`;

const Line = styled.div`
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 3px;
    margin: 5px;
    background: ${props => props.color};
  }
`;

const Navbar = ({ title, links, primary, secondary }) => {
  const [open, setOpen] = useState(false);

  if (
    window.navigator.userAgent.indexOf("Edge") < 0 &&
    window.navigator.userAgent.indexOf("MSIE") < 0 &&
    window.navigator.userAgent.indexOf("Trident") < 0
  ) {
    const handleClick = () => {
      if (open) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    window.addEventListener("resize", e => {
      if (e.target.outerWidth > 768) {
        setOpen(false);
      }
    });

    if (open) {
      const x = window.scrollX;
      const y = window.scrollY;
      window.onscroll = () => {
        window.scrollTo(x, y);
      };
    } else {
      window.onscroll = () => {};
    }
    return (
      <Nav color={primary}>
        <Hamburger onClick={() => handleClick()}>
          <Line color={secondary} />
          <Line color={secondary} />
          <Line color={secondary} />
        </Hamburger>
        <Content>
          <Title color={secondary}>{title}</Title>
          <HamburgerLinks color={secondary} open={open}>
            {links.map((link, index) => {
              return (
                <li key={index} onClick={() => handleClick()}>
                  <a href={link.href}>{link.name}</a>
                </li>
              );
            })}
          </HamburgerLinks>
        </Content>
      </Nav>
    );
  } else {
    return (
      <Nav color={primary}>
        <Content>
          <Title color={secondary}>{title}</Title>
          <Links color={secondary}>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              );
            })}
          </Links>
        </Content>
      </Nav>
    );
  }
};

export default Navbar;
