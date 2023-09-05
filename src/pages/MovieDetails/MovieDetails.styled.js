import { styled } from "styled-components";


export const Container = styled.div`
display: flex;
border-bottom: 1px solid #ccc;
max-width: 1200px;
margin-left: auto;
margin-right: auto;
padding: 15px 15px;`

export const AddInfo = styled.div`
border-bottom: 1px solid #ccc;
max-width: 1200px;
margin-left: auto;
margin-right: auto;
padding: 15px 15px;`

export const NavBar = styled.nav`
display: flex;
flex-direction: column;
gap: 10px;
`

export const Aside = styled.div`
display: flex;
max-width: 1200px;
margin-left: auto;
margin-right: auto;
padding: 15px 15px;`

export const Section = styled.div`
margin-left: 15px;
`

export const List = styled.ul`
display: flex;
list-style: none;
padding: 0;
`

export const Item = styled.li`
margin-right: 10px;
`

export const Button = styled.button`
  padding: 8px 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  color: #191d1e;
  font-weight: 600;
  font-size: 16px;
 
  &:hover {
    color: tomato;
  }`