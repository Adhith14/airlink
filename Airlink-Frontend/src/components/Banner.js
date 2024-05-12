import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';

export const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
           
              <div className="about-para">
                <span className="tagline">Welcome</span>
          
                  <p>We are dedicated to providing you with a seamless and stress-free travel experience.
                   Our app is designed to simplify the process of booking flights, managing reservations, and staying updated on your travel itinerary.
                   Whether you're planning a weekend getaway or a business trip, our user-friendly interface and comprehensive features
                    ensure that every aspect of your journey is taken care of. 
                    With a commitment to reliability, convenience, and customer satisfaction, we strive to be your trusted companion 
                    in all your travel adventures. Sit back, relax, and let us take you to your destination with comfort and ease.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>
           
          </Col>
          <Col xs={12} md={6} xl={5}>
           
          </Col>
        </Row>
      </Container>
    </section>
  )
}
