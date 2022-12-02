import React from "react";
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProgramDetail from "./screens/ProgramDetail";


function App() {
  return (
    <>
    <Router>
      <main>
        <Container>
          <Routes>
            <Route path = '/' element={<HomeScreen />} exact />
            <Route path = '/program/:id' element={<ProgramDetail/>} />
          </Routes>
        </Container>
      </main>
    </Router>
    </>
  );
}

export default App;
