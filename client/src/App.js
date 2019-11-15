import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateForm from "./Movies/UpdateMovie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const removeFromSavedList = movieId => {
    const movies = savedList.filter(m => m.id !== movieId);
    setSavedList(movies);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        exact
        path="/movies/:id"
        render={props => {
          return (
            <Movie
              {...props}
              addToSavedList={addToSavedList}
              removeFromSavedList={removeFromSavedList}
            />
          );
        }}
      />
      <Route exact path="/movies/update-movie/:id" component={UpdateForm} />
    </>
  );
};

export default App;
