import React from 'react'
import {Container, Row, Col } from "react-bootstrap";

export const footer = () => {
  return (
    <>
      <footer> 
        <Container>
          <Row>
            <Col className="text-center">
              <span id="custom-font-2">
                Copyright &copy; Code4Fun
              </span>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default footer;