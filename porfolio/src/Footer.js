import { Linkedin, Envelope, Github, } from 'react-bootstrap-icons'
import { Stack } from 'react-bootstrap'

const Footer = () =>{
  return(
  
    <footer className="text-center text-lg-start bg-dark text-muted"> 
      <Stack gap={2} className="col-md-4 mx-auto p-4">
        <Stack direction='horizontal' gap={3} className="d-flex justify-content-center">
          <Linkedin />
          <Envelope />
          <Github /> 
        </Stack>
        <div className="text-center">
          Thanks for stopping by!
        </div>
      </Stack>
  </footer>
  )
}

export default Footer