import './Navigation.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <Navbar bg='dark'>
      <Container>
        <Navbar.Brand className='text-light' href='/'>The Phone Cave</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Navigation
