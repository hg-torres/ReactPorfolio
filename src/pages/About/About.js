import { Carousel } from 'react-bootstrap'

const About = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="First slide"
        />
        <Carousel.Caption className='bg-dark'>
          <h3>Hello, my name is Henry</h3>
          <p>I am a full stack Web Developer who is currently learning React.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1420582282039-a6d11404cb66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Second slide"
        />

        <Carousel.Caption className='bg-dark'>
          <h3>I enjoy Hiking</h3>
          <p>I enjoy going outdoors after being behind a computer coding. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1627856013091-fed6e4e30025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Third slide"
        />
        <Carousel.Caption className='bg-dark'>
          <h3>Gaming is a hobby of mine</h3>
          <p>I enjoy playing RPG and FPS games with friends.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default About