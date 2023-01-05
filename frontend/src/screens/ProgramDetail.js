import React,{useState, useEffect} from "react";
import {Container, Row, Col, Image, Card} from 'react-bootstrap';
import axios from 'axios';
import { useParams } from "react-router";



const ProgramDetail = () => {
  const params = useParams();
  const [progrm, setProgrm] = useState({});
 
  useEffect(() => {
    (async () => {
      const {data} = await axios.get(`/api/program/${params.id}`);
      setProgrm(data);
    })();
  },[params])

  return (
    <>  
      <Container className='image-container'>
          <Row>
            <div className='image-background col-9' style={{}}>
             <Image src={progrm.image} alt='Event' fluid />
            </div>
            <div className='col-3 row1Col2'>
              <Card className='mb-3'>
                  <Card.Body>
                    <Card.Text><strong>{progrm.price}</strong></Card.Text>
                    <button type="button"  className="btn btn-danger btn-ticket"
                    disabled = {progrm.seatsAvailable === 0}>Tickets</button>
                  </Card.Body>
               
                   
              </Card>
            </div>
          </Row>
          

         
        
        
          <Row className='row1'>
            <Col className='col1 col-9'>
              <h3 className='h3-title'><strong>{progrm.name}</strong></h3>
            </Col>
           
          </Row>


          <Row className='row2'>
            <Col className='col-9'>
              <h6 className='p-description'>{progrm.description}</h6>
            </Col>
          </Row>

          <Row className='row4'>
            <Col className='col-3'>
              <div className='div-host'>
                <span>By</span>
                <span className='span-host'>{progrm.host}</span>
              </div>
            </Col>
            <Col className='col-3'>
              <p className='p-rating'>{progrm.rating}   {progrm.numReviews} reviews</p>
            </Col>
          </Row>


          <Row className='row5'>
            <Col>
              <h4 className='h4-sub'><strong>When and Where</strong></h4>
            </Col>
          </Row>

          <Row className='row6'>
            <Col className='col-4'>
              <div className='div-date'>
                <p>
                <i className="fas fa-regular fa-calendar"></i>
                 <span className='span-date-loc'> <strong>Date and Time</strong></span>
                </p>
                <div><span className='span-date'>{progrm.date}</span>
                   <span className='span-time'>{progrm.time}</span></div>
              </div>
            </Col>
            <Col className='col-5'>
              <div className='div-location'>
                <p>
                <i className="fas fa-regular fa-globe"></i>
                <span className='span-date-loc'><strong>Location</strong></span>
                </p>
                <div>
                  <span >{progrm.location}</span>
                </div>
              </div>
            </Col>
          </Row>



        <Row className='row6'>
          <Col>
            <h4 className='h4-sub'><strong>About this event</strong></h4>
            <p>{progrm.about}</p>
          </Col>
        </Row>
    </Container>

    </>
  )
}

export default ProgramDetail;