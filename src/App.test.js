import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils, { act } from 'react-dom/test-utils';
import App from './App';

let container;

/////// Setup ////////

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  ReactDOM.render(<App />, container);
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  document.body.removeChild(container);
  container = null;
});

//////// Tests ///////

it('renders without crashing', () => {
  //nothing else needs to happen
});

it('updates commands on old site change', () => {
  const inputOldUrl = container.querySelector(".input--old-url");
  const commandOptions = container.querySelector(".commands-options");

  //default value
  expect(commandOptions.textContent).toBe("UPDATE wp_options SET option_value = replace(option_value, 'https://', 'https://');");

  //change the value
  inputOldUrl.value = "https://test.com";
  ReactTestUtils.Simulate.change(inputOldUrl);

  //test for changes
  expect(inputOldUrl.value).toBe("https://test.com");
  expect(commandOptions.textContent).toBe("UPDATE wp_options SET option_value = replace(option_value, 'https://test.com', 'https://');");
});

it('updates commands on old prefix change', () => {
  const inputOldPrefix = container.querySelector(".input--old-prefix");
  var commandUsermeta = container.querySelector(".commands-usermeta");

  //default value
  expect(commandUsermeta).toBeNull();

  //change the value
  inputOldPrefix.value = "wp_old_";
  ReactTestUtils.Simulate.change(inputOldPrefix);

  //test for changes
  var commandUsermeta = container.querySelector(".commands-usermeta");
  expect(inputOldPrefix.value).toBe("wp_old_");
  expect(commandUsermeta.textContent).toBe("UPDATE wp_usermeta SET meta_key = replace(meta_key, 'wp_old_', 'wp_');");
});

it('updates commands on new prefix change', () => {
  const inputNewPrefix = container.querySelector(".input--new-prefix");
  const commandOptions = container.querySelector(".commands-options");
  var commandUsermeta = container.querySelector(".commands-usermeta");

  //default value
  expect(commandUsermeta).toBeNull();
  expect(commandOptions.textContent).toBe("UPDATE wp_options SET option_value = replace(option_value, 'https://', 'https://');");

  //change the value
  inputNewPrefix.value = "wp_new_";
  ReactTestUtils.Simulate.change(inputNewPrefix);

  //test for changes
  var commandUsermeta = container.querySelector(".commands-usermeta");
  expect(inputNewPrefix.value).toBe("wp_new_");
  expect(commandOptions.textContent).toBe("UPDATE wp_new_options SET option_value = replace(option_value, 'https://', 'https://');");
  expect(commandUsermeta.textContent).toBe("UPDATE wp_new_usermeta SET meta_key = replace(meta_key, 'wp_', 'wp_new_');");
});