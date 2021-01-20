import styled, { keyframes } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-image: linear-gradient(to right, #141414, #202121);
    color: #fff;
    font-family: 'Montserrat', 'Cabin', helvetica, arial, sans-serif;
  }

  p {
    font-size: 1.6rem;
  }

  small {
    font-size: 1.2rem;
  }
`
export const Nav = styled('div')`
    background-image: linear-gradient(#202121, #141414 90%);
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0 2px 3px rgba(255, 255, 255, 0.03);
    width: 100%;
`

export const NavHeader = styled('div')`
    font-size: 2em;
    font-weight: 300;
    max-width: 1010px;
    padding: 26px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    
    @media(max-width: 768px) {
      font-size: 1.3em;
    }
`

export const NavLeft = styled('div')`
    width: 100%;
    text-align: left;
    color: white;
`

export const NavCenter = styled('div')`
    width: 33.333%;
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    @media (max-width: 378px) {
        font-size: 1.5em;
      }
`

export const NavRight = styled('div')`
    width: 33.333%;
    text-align: right;
    font-size: 2rem;
    font-weight: 300;
`



export const Title = styled.div`
  font-size: 4.4rem;
  text-align: center;
  margin-bottom: 20px;
`

export const MainContainer = styled('div')`
  max-width: 1010px;
  width: 100%;
  margin: 20px auto;
  padding-bottom: 3rem;
`

export const ContentWrapper = styled('div')`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`

export const Card = styled('div')`
    position: relative;
    flex-basis: 100%;
    flex-basis: calc(20% - 30px);
    margin: 10px;
    cursor: pointer;
    transition: 0.3s all ease-in;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.09);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    

    @media (max-width: 992px) {
      flex-basis: calc( 33.333% - 20px);
    }

    @media (max-width: 600px) {
      flex-basis: calc(50% - 20px)
    }

    &:hover {
      box-shadow: 0 4px 6px 0 rgba(0,0,0,0.2);
    }
`

export const Image = styled.img`
    cursor: pointer;
    width: 50%;
    height: auto;
    object-fit: cover;
    margin: 0 5px;
`

export const CardImage = styled.img`
    cursor: pointer;
    width: 100%;
    height: auto;
    object-fit: cover;
  
`

export const List = styled.ul`
  list-style-type: none;
  font-size: 1.5rem;
`
export const ListItem = styled.li`
`

//Search Bar
export const InputMain = styled.div`
  background: purple;
  height: 100%;
  position: absolute;
  text-align: center;
  width: 100%;

  &:before, &:after {
    content: '';
    display: block;	
    height: 1px;
    left: 50%;
    margin: 0 0 0 -400px;
    position: absolute;
    width: 800px;
  }
`

export const Form = styled.form`
  overflow: auto;
  background: #111;
  background: linear-gradient(#1b1b1b, #111);
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: inset 0 0 0 1px #272727;
  display: inline-block;
  margin: 10px;
  padding: 20px;
  position: relative;
  z-index: 1;

`
const glow = keyframes`
0% {
    border-color: #393;
    box-shadow: 0 0 5px rgba(0,255,0,.2), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #000;
  }	
  100% {
    border-color: #6f6;
    box-shadow: 0 0 20px rgba(0,255,0,.6), inset 0 0 10px rgba(0,255,0,.4), 0 2px 0 #000;
  }
`

export const Input = styled.input`
  background: #222;	
  background: linear-gradient(#333, #222);	
  border: 1px solid #444;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 2px 0 #000;
  color: #888;
  display: block;
  float: left;
  font-family: 'Montserrat', 'Cabin', helvetica, arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  height: 40px;
  margin: 0;
  padding: 0 10px;
  text-shadow: 0 -1px 0 #000;
  width: 600px;
  line-height: 40px;

  &:focus {
    animation: ${glow} 800ms ease-out infinite alternate;
    background: #222922;
    background: linear-gradient(#333933, #222922);
    border-color: #393;
    box-shadow: 0 0 5px rgba(0,255,0,.2), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #000;
    color: #efe;
    outline: none;
  }
`

export const Button = styled.button`
  background: #222;
  background: linear-gradient(#333, #222);
  box-sizing: border-box;
  border: 1px solid #444;
  border-left-color: #000;
  border-radius: 0 5px 5px 0;
  box-shadow: 0 2px 0 #000;
  color: #fff;
  display: block;
  float: left;
  font-size: 20px;
  font-weight: 400;
  height: 40px;
  line-height: 40px;
  margin: 0;
  padding: 0;
  position: relative;
  text-shadow: 0 -1px 0 #000;
  width: 90px;

  &:hover, &focus {
    background: #292929;
    background: linear-gradient(#393939, #292929);
    color: #5f5;
    outline: none;
  }

  &:active {
    background: #292929;
    background: linear-gradient(#393939, #292929);
    box-shadow: 0 1px 0 #000, inset 1px 0 1px #222;
    top: 1px;
  }
`

//Movie Detail Page
export const Container = styled.div`
  margin: 0 160px 0 auto;
  max-width: 1000px;
  padding: 10px;
`
export const SideNav = styled.div`
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  padding-top: 20px;
`

export const Row = styled.div`
  display: flex;
  margin-left: 160px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
 
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  padding: 0;
  align-items: center;
  text-align: justify;
  
  

  @media screen and (min-width: 600px) {
    width: 100%;
    flex: 1;
  }
`