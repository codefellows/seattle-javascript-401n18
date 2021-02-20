import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const handleChange = e => {
    console.log(e.target.name, e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('all done');
  }

  return (
    <>

      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>

      <main>
        <Form onSubmit={handleSubmit}>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Your Info</Card.Title>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={handleChange} name="mail" type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">Submit Form</Button>
            </Card.Body>
          </Card>

        </Form>
      </main>

      <footer>
        <Navbar bg="dark">
          <Navbar.Brand>&copy; 2020 Javascript 401</Navbar.Brand>
        </Navbar>
      </footer>

    </>
  );
}

export default App;
