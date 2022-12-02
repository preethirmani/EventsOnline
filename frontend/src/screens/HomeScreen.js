import React from 'react'
import { Row, Col } from 'react-bootstrap'
import programs from '../programs'


const HomeScreen = () => {
  return (
    <div>
      <>
      <h1> Events </h1>
      <Row>
      {
          programs.map(program => (
            <Col key={program._id} sm={12} md={6} lg={4} xl={3}>
              Program prog = {program} />
            </Col>
          ))
        }
        
      </Row>
      </>
    </div>
  )
}

export default HomeScreen