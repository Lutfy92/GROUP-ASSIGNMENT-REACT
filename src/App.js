import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import FavoriteMovies from './FavoriteMovies';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MovieList} />
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="/favorites" component={FavoriteMovies} />
      </Switch>
    </Router>
  );
}

export default App;
