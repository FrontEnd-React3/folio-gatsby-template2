import React from "react";
import { rgba } from "polished";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css"
import { Section, Title, Text, Span, Box } from "../../components/Core";
import ContactForm from "../../components/ContactForm";
import { device } from "../../utils";
import { SimpleMap } from "./Map";

const ContactCard = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => rgba(theme.colors.primary, 0.1)};
  margin-top: 2rem;
  @media ${device.lg} {
    margin-top: 20px;
  }
`;

const Contact = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="justify-content-center">
            <Col lg="6">
              <Box className="pr-lg-5">
                <Title color="light" variant="secSm" mb="2rem">
                  Contact me!
                </Title>
                <Text color="light" mb="2.75rem">
                  Send me a message and I will reply within 48 hours.
                </Text>
                <ContactForm theme="dark" />
              </Box>
            </Col>
            <Col lg="5">
              <div className="ml-lg-5">
                <ContactCard  id="mapcard" className="p-5">
                  <a href="https://www.google.com/maps/place/Soldatenstraat+63,+1082+Sint-Agatha-Berchem/@50.8617675,4.2940872,17z/data=!3m1!4b1!4m5!3m4!1s0x47c3c1451357d329:0xdd7c4127352d0fa8!8m2!3d50.8617675!4d4.2962759">
                  </a>
                </ContactCard>
                <ContactCard className="p-5">
                  <div>
                    <Text color="light">Email me at</Text>

                    <a href=".Lantsoght@gmail.com" className="font-weight-bold">
                      <Span color="primary">B.Lantsoght@gmail.com</Span>
                    </a>
                  </div>
                  <div className="mt-5">
                    <Text color="light">Call me at</Text>

                    <div>
                      <a href="tel:+1-402-4983" className="font-weight-bold">
                        <Span color="primary">0499 388 227</Span>
                      </a>
                    </div>
                  </div>
                </ContactCard>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
