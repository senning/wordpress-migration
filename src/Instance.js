import React, { Component } from 'react';
import Input from './Input';

class WordPressInstance extends Component {
  onChangePrefix(value){
    
  }

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
      <div>
        <h1>{this.props.label}</h1>
        <Input
          label="Site URL"
          name="site-name"
          onChange={this.props.onChangeSiteUrl}
          validator={this.autoProtocol}
          defaultValue="https://"
          />
        <Input
          label="Table Prefix"
          name="table-prefix"
          defaultValue="wp_"
          onChange={this.onChangePrefix}
          />
      </div>
    );
  }
}

WordPressInstance.defaultProps = {
  label: ""
}

export default WordPressInstance;