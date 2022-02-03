import { Container, Form, Row, Col, Button } from 'react-bootstrap'

const Contact = () => {
  return(
    <Container>
      <Form className='m-4 '>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">

          <Col sm={12}>
            <Form.Control type="name" placeholder="Name" />
          </Col>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">

            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">

            <Form.Control type="password" placeholder="Subject" />
          </Form.Group>
        </Row>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalMessage">
          <Col sm={12}>
            <Form.Control as="textarea" type="message" placeholder="Feel free to leave me any questions or comments" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="d-flex justify-content-center mb-3">
          <Col sm={'auto'}>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>

    
  )
}

export default Contact