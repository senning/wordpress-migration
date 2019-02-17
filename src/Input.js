import React, { Component } from 'react';
import './App.css';
import { SitesContext } from './SitesContext';

class Input extends Component {
  constructor(props){
    super(props);

    this.state = {value: this.props.defaultValue}

    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onChange(event){
    let value = event.target.value;
    if(typeof this.props.validator === "function"){
      value = this.props.validator(value);
    }
    // this.props.onChange(value);
    this.context.update(this.props.instance, this.props.name, value);

    this.setState({
      value: value
    });
  }

  onFocus(){
    this.setState({
      focus: true
    })
  }

  onBlur(){
    this.setState({
      focus: false
    })
  }

  render() {
    let containerClass = "input-container";
    containerClass += this.state.focus ? " is-focussed" : "";

    let inputClass = "input-control ";
    inputClass += "input--"+this.props.instance+"-"+this.props.name;

    return (
      <label className={containerClass}>
        <span 
          className="input-label"
          >{this.props.label}</span>
        <input
          className={inputClass}
          type={this.props.type}
          value={this.context[this.props.instance][this.props.name]}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          autoFocus={this.context.autofocus === this.props.instance+"-"+this.props.name}
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

Input.contextType = SitesContext;

export default Input;