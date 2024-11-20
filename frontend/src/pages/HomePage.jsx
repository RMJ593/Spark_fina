import React from 'react';
// import NavigationBar from '../components/NavigationBar';
import {Carousel,Button} from 'react-bootstrap';


function HomePage() {
  return (
 
    // src/pages/HomePage.js

    <div
      style={{
        maxWidth: '80%',
        height:'500px',
        margin: 'auto',
        border: '2px solid #007bff', // Primary color border
        borderRadius: '10px',
        backgroundColor: '#ffffff',
      }}
    >
      <Carousel g>
        <Carousel.Item
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            height:'497px'
          }}
        >
          <img
            src={require('../components/image/ExampleCarouselImage/volunteer1 1@2x.png')}
            alt="First slide"
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover', 
            }}
          />
          <Carousel.Caption
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '15px',
              borderTop: '2px solid #007bff',
              textAlign: 'center',
            }}
          >
            <h5 style={{ fontSize: '1.25rem', color: '#007bff', marginBottom: '5px' }}>
              Volunteer to Teach English
            </h5>
            <p style={{ fontSize: '0.875rem', color: '#333333', marginBottom: '10px' }}>
              The volunteer program for teaching English is designed for
              international volunteers seeking a practical classroom experience
              in primary schools, helping children learn reading and writing English.
            </p>
            <Button
              variant="primary"
              style={{
                backgroundColor: '#007bff',
                border: 'none',
                padding: '5px 20px',
                fontSize: '0.875rem',
                borderRadius: '5px',
              }}
            >
              Register
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            height:'497px'
          }}
        >
          <img
            src={require('../components/image/ExampleCarouselImage/volunter 2.jpg')}
            alt="First slide"
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover', 
            }}
          />
          <Carousel.Caption
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '15px',
              borderTop: '2px solid #007bff',
              textAlign: 'center',
            }}
          >
            <h5 style={{ fontSize: '1.25rem', color: '#007bff', marginBottom: '5px' }}>
              Volunteer to Teach Computer Program
            </h5>
            <p style={{ fontSize: '0.875rem', color: '#333333', marginBottom: '10px' }}>
            Volunteer to Teach Computer Programming, designed for international volunteers seeking hands-on classroom experience in empowering women through coding and digital skills.
            </p>
            <Button
              variant="primary"
              style={{
                backgroundColor: '#007bff',
                border: 'none',
                padding: '5px 20px',
                fontSize: '0.875rem',
                borderRadius: '5px',
              }}
            >
              Register
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomePage; 