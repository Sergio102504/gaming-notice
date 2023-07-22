import React from 'react'
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import games from '../image/best-video-games-1553109264.jpg'
import games2 from '../image/2games.jpg'
import '../style/principal.css'

export const HomePage = () => {
  return (
    <>
      
      <br />

      <Container fluid>
      
        <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://deanneedham.files.wordpress.com/2012/10/the-games-logo.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1334436084/photo/top-down-view-of-colorful-illuminated-gaming-accessories-laying-on-table.jpg?s=612x612&w=0&k=20&c=E9xnbAZoBS5LlUX0q-zxT_3m6gEZpyB2k51_U4LLMNs="
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.ovrik.com/wp-content/uploads/2016/12/Gamers.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>

    <br></br>
    <Container>
      <Row>
        <Col>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Col>
        <Col xs={8} md={6} id="features">
        <Image src={games} thumbnail />
        </Col>
      </Row>
      <br></br>
      <Row>
      <Col xs={8} md={6} id="pricing">
        <Image src={games2} thumbnail />
        </Col>
      <Col>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Col>
      </Row>
    </Container>

      <footer>
        <p className="fin">Sergio Alejandro Quintero Fonseca<br></br> quinterosergio588@gmail.com <br></br> 2023
        </p>
        
      </footer>
  
 
      
    </>
    
  )
}
