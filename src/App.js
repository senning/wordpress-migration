import React, { Component } from 'react';
import Instance from './Instance';
import './App.css';

/**
 * 
 * 
 * Instance 1  |  Instance 2
 * -------------------------
 * Migration code
 *
 *          Branding
 */


/**
 * UPDATE wp_rng97y_options SET option_value = replace(option_value, 'http://standagainstracism.dreamhosters.com', 'http://standagainstracism.org') WHERE option_name = 'home' OR option_name = 'siteurl';
        
UPDATE wp_rng97y_posts SET guid = replace(guid, 'http://standagainstracism.dreamhosters.com', 'http://standagainstracism.org') WHERE post_type <> 'attachment';
        
UPDATE wp_rng97y_posts SET post_content = replace(post_content, 'http://standagainstracism.dreamhosters.com', 'http://standagainstracism.org');

UPDATE wp_rng97y_postmeta SET meta_value = replace(meta_value, 'http://standagainstracism.dreamhosters.com', 'http://standagainstracism.org');


UPDATE wp_rng97y_usermeta SET meta_key = replace(meta_key, 'tsa6fk', 'rng97y');
//For multisitish instance things like xx_xxxxxx_capabilities, xx_xxxxxx_user_level

UPDATE wp_rng97y_options SET option_name = replace(option_name, 'tsa6fk', 'rng97y')
//For multisitish instance things like xx_xxxxxx_user_roles and xx_xxxxxx_backup_user_roles

 */


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      currentPrefix: "wp_",
      currentUrl: "https://",
      newPrefix: "wp_",
      newUrl: "https://"
    }

    this.onUpdateCurrentSitePrefix = this.onUpdateCurrentSitePrefix.bind(this);
    this.onUpdateCurrentSiteUrl = this.onUpdateCurrentSiteUrl.bind(this);
    this.onUpdateNewSitePrefix = this.onUpdateNewSitePrefix.bind(this);
    this.onUpdateNewSiteUrl = this.onUpdateNewSiteUrl.bind(this);
  }

  onUpdateCurrentSiteUrl(){

  }

  onUpdateCurrentSitePrefix(){

  }

  onUpdateNewSiteUrl(){

  }

  onUpdateNewSitePrefix(){

  }

  render() {
    return (
      <div className="App">
        <Instance 
          label="Current Site"
          />
        <Instance 
          label="New Site"
          />
      </div>
    );
  }
}

export default App;
