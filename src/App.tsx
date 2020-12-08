import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import MovieDetail from './components/MovieDetail'
import { 
  GlobalStyle,
  Nav,
  NavHeader,
  NavLeft,

} from './Styles'


function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Nav>
          <NavLeft>
            <NavLeft>
              <NavHeader >
                <Link to={"/"} style={{color: "red", textDecoration: "none"}}>
                  MirelesCloud Movie App
                </Link>
              </NavHeader>
            </NavLeft>
          </NavLeft>
        </Nav>
        <Route exact path="/" component={Home}/>
        <Route path="/info/:id" component={MovieDetail}/>
      </Router>
    </>
  );
}

export default App;
