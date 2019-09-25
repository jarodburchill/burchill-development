import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100vw;
  height: 10vh;
  top: 0;
  position: fixed;
  background: ${props => props.bg};
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
  color: ${props => props.fg};
  margin-left: 5%;
  z-index: 3;
  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }
`;

const Links = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  width: 45%;
  height: 100%;
  margin: 0 5% 0 0;
  li {
    margin: 0 2.5%;
  }
  li a {
    color: ${props => props.fg};
    text-decoration: none;
    font-size: 15px;
  }
`;

const HamburgerLinks = styled(Links)`
  @media screen and (max-width: 1000px) {
    position: fixed;
    flex-direction: column;
    justify-content: space-evenly;
    background: ${props => props.bg};
    height: 100vh;
    width: 100vw;
    margin: 5% 0 0 0;
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
  @media screen and (max-width: 1000px) {
    position: absolute;
    cursor: pointer;
    right: 5%;
    top: 50%;
    transform: translate(-5%, -50%);
    z-index: 3;
  }
`;

const Line = styled.div`
  @media screen and (max-width: 1000px) {
    width: 30px;
    height: 3px;
    margin: 5px 0;
    background: ${props => props.fg};
  }
`;

const Navbar = ({ children, title, bg, fg }) => {
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
      if (e.target.outerWidth > 1000) {
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
      <Nav bg={bg}>
        <Hamburger onClick={() => handleClick()}>
          <Line fg={fg} />
          <Line fg={fg} />
          <Line fg={fg} />
        </Hamburger>
        <Content>
          <Title fg={fg}>{title}</Title>
          <HamburgerLinks fg={fg} bg={bg} open={open}>
            {children.map((link, index) => {
              return (
                <li key={index} onClick={() => handleClick()}>
                  {link}
                </li>
              );
            })}
          </HamburgerLinks>
        </Content>
      </Nav>
    );
  } else {
    return (
      <Nav bg={bg}>
        <Content>
          <Title fg={fg}>{title}</Title>
          <Links fg={fg}>
            {children.map((link, index) => {
              return <li key={index}>{link}</li>;
            })}
          </Links>
        </Content>
      </Nav>
    );
  }
};

export default Navbar;
