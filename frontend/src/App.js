import React from "react";
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from "./components /Footer";
import Header from "./components /Header";
import CartScreen from "./screens/CartScreen";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from "./screens/LoginScreen";
import ProgramDetail from "./screens/ProgramDetail";
import SearchScreen from "./screens/SearchScreen";



function App() {
  return (
    <>
    
    <Router>
      <Header />
    
      <main>
        <Container>
          <Routes>
            <Route path = '/' element={<HomeScreen />} exact />
            <Route path = '/login' element= {<LoginScreen />} />
            <Route path = '/program/:id' element={<ProgramDetail/>} />
            <Route path='/program/search/:name' element={<SearchScreen/>} />
            <Route path='/program/cart/' element={<CartScreen/>} />
            <Route path='/program/cart/:id' element = {<CartScreen/>} />

          </Routes>
        </Container>
      </main>
     
    </Router>
    <Footer />
    </>
  );
}

export default App;
