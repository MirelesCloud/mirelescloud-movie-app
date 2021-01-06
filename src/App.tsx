import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import MovieDetail from './components/MovieDetail'
import { motion } from 'framer-motion'
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
                  <motion.div
                    initial={{ x: "-300px", opacity: 0}}
                    animate={{ x: 0, opacity: 1}}
                    transition={{ ease: "easeOut", duration: 1 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    MirelesCloud Movie App
                  </motion.div>
                </Link>
              </NavHeader>
            </NavLeft>
          </NavLeft>
        </Nav>
          <Route exact path="/" component={Home}/>
          <Route path="/:id" component={MovieDetail}/>
      </Router>
    </>
  );
}

export default App;
