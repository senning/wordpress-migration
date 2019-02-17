import React, { Component, Fragment } from 'react';
import './App.css';
import { SitesContext } from './SitesContext';

class Commands extends Component {
  constructor(props){
    super(props);

    this.state = {
      showHints: false
    }

    this.toggleHints = this.toggleHints.bind(this);
  }

  toggleHints(){
    this.setState({
      showHints: !this.state.showHints
    });
  }

  render() {
    return (
      <div className="commands">
        <h1 className="commands-title">Here's your SQL:</h1>
        <p>UPDATE {this.context.new.prefix}options SET option_value = replace(option_value, '{this.context.old.url}', '{this.context.new.url}');</p>
        <p>UPDATE {this.context.new.prefix}posts SET guid = replace(guid, '{this.context.old.url}', '{this.context.new.url}') WHERE post_type &lt;&gt; 'attachment';</p>
        <p>UPDATE {this.context.new.prefix}posts SET post_content = replace(post_content, '{this.context.old.url}', '{this.context.new.url}');</p>
        <p>UPDATE {this.context.new.prefix}postmeta SET meta_value = replace(meta_value, '{this.context.old.url}', '{this.context.new.url}');</p>
        { this.context.new.prefix !== this.context.old.prefix ?
          <Fragment>
            <p>UPDATE {this.context.new.prefix}usermeta SET meta_key = replace(meta_key, '{this.context.old.prefix}', '{this.context.new.prefix}');</p>
            <p>UPDATE {this.context.new.prefix}options SET option_name = replace(option_name, '{this.context.old.prefix}', '{this.context.new.prefix}');</p>
          </Fragment>
          : ""
        }
        {!this.state.showHints ?

          <button 
            className="hint-trigger"
            title="Show description of SQL commands"
            onClick={this.toggleHints}
            >?</button> :

          <div className="hint-text">
            <button
              className="hint-trigger"
              title="Hide description of SQL commands"
              onClick={this.toggleHints}
              >&times;</button>
            <h1 className="commands-title">Here's what each command does:</h1>
            <ol>
              <li>Update the <code>options</code> so WordPress knows where your site is. Used for things like including assets and locating the admin dashboard; it'll also update any URLs in your widgets.</li>
              <li>Update the <code>posts</code> table to set the permalink for all of your posts and pages to the new site.</li>
              <li>Update the <code>posts</code> table so that all of the links and images <em>in</em> your posts and pages are pointed to the new site.</li>
              <li>Update and <code>post_meta</code> to point to the new site. These are generally used by plugins or theme customizations.</li>
            </ol>
            <p>These two commands are only necessary, and will only show up, if the table prefix is changing:</p>
            <ol>
              <li>Updates each user's capabilities and dashboard settings to use the new prefix.</li>
              <li>Update the site's capabilities settings to use the new prefix.</li>
            </ol>
          </div>
        }
      </div>
    );
  }
}

Commands.contextType = SitesContext;

export default Commands;