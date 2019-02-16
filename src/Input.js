import React, { Component } from 'react';
import './App.css';

class Input extends Component {
  constructor(props){
    super(props);

    this.state = {value: this.props.defaultValue}

    this.onChange = this.onChange.bind(this);
  }

  onChange(event){
    let value = event.target.value;
    if(typeof this.props.validator === "function"){
      value = this.props.validator(value);
    }
    this.props.onChange(value);

    this.setState({
      value: value
    });
  }

  render() {
    return (
      <label className="input-container">
        <span 
          className="input-label"
          >{this.props.label}</span>
        <input 
          type={this.props.type} 
          name={this.props.name}
          value={this.state.value}
          onChange={this.onChange} 
          />
      </label>
    );
  }
}

Input.defaultProps = {
  label: "",
  type: "input",
  name: "",
  defaultValue: "",
  onChange: function(){}
}

export default Input;