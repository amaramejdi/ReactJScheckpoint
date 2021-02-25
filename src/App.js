import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Inscription Page</h1>
        <Form>

    <Form.Group controlId="formName">
    <Form.Label>Name :</Form.Label>
    <Form.Control type="text" placeholder="Enter your full name" />
    <Form.Text className="text-muted">
      We'll enter a valid full name.
    </Form.Text>
  </Form.Group>

  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Load your foto" />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword1">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Choose Password" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword2">
    <Form.Label>Validate Password</Form.Label>
    <Form.Control type="password" placeholder="Repeat your password" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Write you commant</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>

  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Validate inscription
  </Button>
</Form>

      </div>
    );
  }
}

export default App;