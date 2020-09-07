import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

const Home = lazy(() => import("../Pages/Home"));
const MoviesPage = lazy(() => import("../Pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../Pages/MovieDetailsPage"));

export default function App() {
  return (
    <>
      <Navigation />
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route path="/movies" component={MoviesPage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    </>
  );
}
