import React, { Component } from 'react';
import Input from './Input';

class WordPressInstance extends Component {

  /**
   * Check the site URL for a protocol
   * If none found, automatically add https
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */
  autoProtocol(value){
    value = value.match(/^.*:\/\//g) ? 
      value
      : "https://"+value;

    return value;
  }

  render() {
    return (
      <div className="instance">
        <h1 className="instance-title">{this.props.label}</h1>
        <Input
          instance={this.props.instance}
          label="Site URL"
          name="url"
          validator={this.autoProtocol}
          />
        <Input
          instance={this.props.instance}
          label="Table Prefix"
          name="prefix"
          defaultValue="wp_"
          />
      </div>
    );
  }
}

WordPressInstance.defaultProps = {
  label: ""
}

export default WordPressInstance;