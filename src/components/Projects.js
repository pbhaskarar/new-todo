import React from 'react'
import '../App.css';
import { Col, Container, Row } from 'react-bootstrap';
import NewImg from '../bgimg.jpg';
import audioSong from '../Y2Mate.is - Nee valle nenuntine pilla whatsapp status-9uAB6mFQisc-160k-1656181959652.mp3';
import newVideo from '../Nee valle nenuntine pilla whatsapp status.mp4';
import newVideo1 from '../2.mp4';

const Projects = () => {
  return (
    <div>
      <center>
      <Container>
        <Row xs="auto" className='col-spaces' >
          <Col>
          <img src={NewImg} alt="newimg"  className='newImg' />
          </Col>
          <Col>
          <video className='newvideo' controls >
          <source src={newVideo} type="video/mp4"/>
          </video>
          </Col>
          <Col> <audio src={audioSong}  controls  className='newAudio'/>
          </Col>
          <Col>
          <video className='newvideo' controls >
          <source src={newVideo1} type="video/mp4"/>
          </video>
          </Col>
          
        </Row>
      </Container>
      </center>
    </div>
  )
}

export default Projects