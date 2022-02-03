import {Container,ListGroup, Row} from 'react-bootstrap'
const Resume = () => {
  return (
    <Container className='m-4'>
      <h1 className='m-2'>Resume</h1>
      <Row className='m-2'>
       <ListGroup variant= "flush">
          <ListGroup.Item variant="primary">Front-End Proficiencies</ListGroup.Item>
        <ListGroup.Item >HTML</ListGroup.Item>
        <ListGroup.Item >CSS</ListGroup.Item>
        <ListGroup.Item >JavaScript</ListGroup.Item>
        <ListGroup.Item >React</ListGroup.Item>
        <ListGroup.Item >Boostrap</ListGroup.Item>
        <ListGroup.Item >Bulma</ListGroup.Item>
      </ListGroup> 
      </Row>

      <Row className='m-2'>
        <ListGroup variant="flush">
          <ListGroup.Item variant="danger">Back-End Proficiencies</ListGroup.Item>
          <ListGroup.Item >APIs</ListGroup.Item>
          <ListGroup.Item >Node</ListGroup.Item>
          <ListGroup.Item >Express</ListGroup.Item>
          <ListGroup.Item >MySQL</ListGroup.Item>
          <ListGroup.Item >Sequelize</ListGroup.Item>
          <ListGroup.Item >MongoDB</ListGroup.Item>
          <ListGroup.Item >Mongoose</ListGroup.Item>
          <ListGroup.Item >Postman</ListGroup.Item>
          <ListGroup.Item >Passport</ListGroup.Item>
        </ListGroup>
      </Row>
       
    </Container>
    
  )
}

export default Resume