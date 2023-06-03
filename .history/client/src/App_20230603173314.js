require('dotenv').config();
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import Helmet
import Search from './components/SearchBox';
import UserDetails from './components/UserDetails';
import RepoDetails from './components/RepoDetails';
import './App.css'

function App() {
  return (
    <Router>
      <Helmet>
        {/* Set default title for the app */}
        <title>GitHub Explorer</title>
      </Helmet>
      <Routes>
        {/* Route for the search box. Matches exactly the root path '/' */}
        <Route path="/" element={<Search />} />

        {/* Route for displaying user details. Matches path '/users/:username' */}
        <Route path="/users/:username" element={<UserDetails />} />

        {/* Route for displaying repo details. Matches path '/repo/:username/:reponame' */}
        <Route path="/repo/:username/:reponame" element={<RepoDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
