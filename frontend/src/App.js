import React from "react";
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from "./components /Footer";
import Header from "./components /Header";
import SearchEvent from "./components /SearchEvent";

import HomeScreen from './screens/HomeScreen';
import ProgramDetail from "./screens/ProgramDetail";



function App() {
  return (
    <>
    <Header />
    <Router>
    
      <main>
        <Container>
          <Routes>
            <Route path = '/' element={<HomeScreen />} exact />
            <Route path = '/program/:id' element={<ProgramDetail/>} />
            <Route path = '/program/search/:name' element = {<SearchEvent/>} />
          </Routes>
        </Container>
      </main>
     
    </Router>
    <Footer />
    </>
  );
}

export default App;
