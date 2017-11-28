import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-4.0.0-beta.2-dist/css/bootstrap.css'
import Button from './components/Button'
import Alert from './components/Alert'
import { Nav, NavItem } from './components/Nav'
import Card, { CardText } from './components/Card'
import FormGroup from './components/FormGroup'
import * as FormControls from './components/FormControls'
import FormCheck from './components/FormCheck'
// Grid
import Container from './components/grid/Container'
import Row from './components/grid/Row'
import Col from './components/grid/Col'

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>A</Col>
          <Col>B</Col>
        </Row>
        <Row>
          <Col width={4}>A</Col>
          <Col width={8}>B</Col>
        </Row>
        <Row>
          <Col sm={4}>A</Col>
          <Col sm={8}>B</Col>
        </Row>
        <Row>
          <Col sm>A</Col>
          <Col sm>B</Col>
        </Row>
        <Row>
          <Col sm md={5} lg={3} xl={2}>A</Col>
          <Col sm md={7} lg={9} xl={10}>B</Col>
        </Row>
        <div className='d-flex justify-content-around mt-3'>
          <Button title='Google' href='https://www.google.com/' />
          <Button title='Second' variation='primary' />
          <Button title='Third' variation='success' />
        </div>
        <div className='mt-3'>
          <Alert variation='danger'>🚨 Danger! 🚨</Alert>
          <Alert variation='success'>Your are our one millionth visitor!</Alert>
          <Alert variation='info'>Seals can hold their breath for 2 hours which is a record in the animal world.</Alert>
        </div>
        <div className='mt-3'>
          <Nav>
            <NavItem>First</NavItem>
            <NavItem active={ true }>Second</NavItem>
            <NavItem>Third</NavItem>
          </Nav>
        </div>
        <div className='mt-3'>
          <Card
            header='Header'
            mb={ 3 }
          >
            <h4>With header and text</h4>
            <p className='card-text'>Lorem ipsum</p>
          </Card>
          <Card
            imageTop={
              <img className="card-img-top" src="https://placehold.it/1200x200" alt="Card image cap" />
            }
          >
            <h4>With top image</h4>
            <p className='card-text'>Lorem ipsum</p>
          </Card>
        </div>
        <div className='mt-3'>
          <form>
            <FormGroup
              id='emailField'
              label='Email address'
              size='lg'
              ControlComponent={ FormControls.Email }
              placeholder='name@example.com'
            />
            <FormGroup
              id='passwordField'
              label='Password'
              ControlComponent={ FormControls.Password }
              placeholder='Awesome password'
            />
            <FormGroup
              id='select'
              label='Select'
              ControlComponent={ FormControls.Select }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </FormGroup>
            <FormCheck
              id='newsletterCheck'
              label='Subscribe to newsletter'
            />
            <Button submit title='Submit' />
          </form>
        </div>
      </Container>
    );
  }
}

export default App;
