import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonList from './Components/PersonList';
import AddPersonForm from './Components/AddPersonForm';
import UpdatePersonForm from './Components/UpdatePersonForm';
import DeletePersonForm from './Components/DeletePersonFrom';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<PersonList/>}/>
          <Route path='/add' element={<AddPersonForm/>}/>
          <Route path='/update' element={<UpdatePersonForm/>}/>
          <Route path='/delete' element={<DeletePersonForm/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
