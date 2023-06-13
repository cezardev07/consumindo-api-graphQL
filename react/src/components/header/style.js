import { styled } from "styled-components";

export const TagHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #FFFFFF;
  z-index: 11111;
  padding: 19px;
`
export const NavBar = styled.nav`
  margin: 0 auto;
  max-width: calc(1400px - 40px);
  /* max-width: calc(1200px - 110px); */
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p{
    text-decoration: none;
    color: #5D5D6D;
    font-size: 40px;
    font-weight: 400;
    font-family: 'Saira Stencil One', cursive;
  }
`