import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import NoteAll from './NoteAll';
import AddNote from './AddNote';
import Write from './Write';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Switch>
        <Route exact path="/" >
       <NoteAll/>
        </Route>
        <Route exact path="/write">
          <Write/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
