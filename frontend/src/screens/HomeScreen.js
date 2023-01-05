import React,{useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Program from '../components /Program'


const HomeScreen = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    ( async () => {
      const {data} = await axios.get(`/api/programs`);
      setPrograms(data);
    })();
  },[])
  
  return (
    <div>
      <>
      <h1> Events </h1>
      <Row>
      {
          programs.map(program => (
            <Col key={program._id} sm={12} md={6} lg={4} xl={3}>
              <Program prog = {program} />
            </Col>
          ))
        }
        
      </Row>
      </>
    </div>
  )
}

export default HomeScreen