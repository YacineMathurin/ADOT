import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form'
import { List } from './components/list';
import ListItem from './components/listItem';

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome !</h1> */}
      {/* <p>Decouvrer nos meilleurs destinations</p> */}
      {/* <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group> */}
      <List />
      {/* <ListItem></ListItem> */}
    </div>
  );
}

export default App;
