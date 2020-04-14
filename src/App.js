import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {nilai: 0}
  }
  handleClick(perintah) {
    let nilai = this.state.nilai
    switch (perintah) {
      case 'decrement':
        nilai--
        break;
      case 'increment':
        nilai++
        break;
      case 'reset':
        nilai=0
        break;
    
      default:
        break;
    }
    if (nilai < 0){
      alert('Number minus not allowed')
    } else {
      this.setState({nilai: nilai})
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Row className="justify-content-md-center">
          <Col md="auto">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button 
                variant="outline-info"
                onClick={() => this.handleClick('decrement')}
              >-</Button>
            </InputGroup.Prepend>
            <FormControl 
              aria-describedby="basic-addon1" 
              value={this.state.nilai}
              readOnly
              className="text-center"
            />
            <InputGroup.Append>
              <Button 
                variant="outline-info"
                onClick={() => this.handleClick('increment')}
              >+</Button>
            </InputGroup.Append>
          </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Button 
              variant="info"
              onClick={() => this.handleClick('reset')}
            >Reset</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
  

export default App;
