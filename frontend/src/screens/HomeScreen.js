import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {listPrograms} from '../actions/programActions'
import { Row, Col } from 'react-bootstrap'
import Program from '../components /Program';
import Loader from '../components /Loader';
import Message from '../components /Message';


const HomeScreen = () => {
 
  const dispatch = useDispatch();
  const programList = useSelector((state) => state.programList);
  const {loading, programs, error} = programList;

  useEffect(() => {

    dispatch (listPrograms());
 
  },[dispatch])
  
  return (
    <div>
      <>
      <h1> Events </h1>
    {
      loading ? (
        <Loader />
      )
      : error ?(
        <Message variant='danger'>{error}</Message>
      )
      : ( <Row>
      {
          programs.map(program => (
            <Col key={program._id} sm={12} md={6} lg={4} xl={3}>
              <Program prog = {program} />
            </Col>
          ))
        }
        
      </Row>)
    }
     
      </>
    </div>
  )
}

export default HomeScreen