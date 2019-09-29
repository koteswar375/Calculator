import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Button from './components/Button.jsx';
import Input from './components/Input';
import { evaluate,pow } from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  updateInput = (val) => {
    this.setState({ input: this.state.input + val });
  }

  clearInput = () => {
    this.setState({ input: '' });
  }

  evaluateResult = (val) => {
    let result;
    let expression = this.state.input.replace(/x/g, '*');
    try {
      switch (val) {
        case '=':
          result = evaluate(expression);
          break;
        case '1/x':
          result = (this.state.input != '') ? evaluate(1 / expression) : 0;
          break;
        case 'x^2':
          result = pow(expression,2);
      }
      this.setState({ input: String(result) });
    }
    catch {
      alert('Incorrect expression');
      this.setState({ input: '' });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button  clickHandler={() => this.evaluateResult('x^2')}>x<sup>2</sup></Button>
            <Button clickHandler={this.updateInput}>%</Button>
            <Button clickHandler={this.evaluateResult}>1/x</Button>
            <Button clickHandler={this.clearInput}>C</Button>
          </div>
          <div className="row">
            <Button clickHandler={this.updateInput}>8</Button>
            <Button clickHandler={this.updateInput}>7</Button>
            <Button clickHandler={this.updateInput}>9</Button>
            <Button clickHandler={this.updateInput}>+</Button>
          </div>
          <div className="row">
            <Button clickHandler={this.updateInput}>4</Button>
            <Button clickHandler={this.updateInput}>5</Button>
            <Button clickHandler={this.updateInput}>6</Button>
            <Button clickHandler={this.updateInput}>-</Button>
          </div>
          <div className="row">
            <Button clickHandler={this.updateInput}>1</Button>
            <Button clickHandler={this.updateInput}>2</Button>
            <Button clickHandler={this.updateInput}>3</Button>
            <Button clickHandler={this.updateInput}>x</Button>
          </div>
          <div className="row">
            <Button clickHandler={this.updateInput}>.</Button>
            <Button clickHandler={this.updateInput}>0</Button>
            <Button clickHandler={this.evaluateResult}>=</Button>
            <Button clickHandler={this.updateInput}>/</Button>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
