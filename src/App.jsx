import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import Banner from "./components/banner/Banner";
import PageNotFound from "components/PageNotFound/PageNotFound";
import Loading from "components/Loading/Loading";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
const MovieDetailsPage = lazy(() =>
  import("./components/movie/MovieDetailsPage")
);
const InfoPerson = lazy(() => import("./pages/InfoPerson"));
const GenrePage = lazy(() => import("./pages/GenrePage"));

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-full h-screen">
            <Loading />
          </div>
        }>
        <Routes>
          <Route element={<Main />}>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <HomePage />
                </>
              }></Route>
            <Route path="/movies" element={<MoviePage />}></Route>
            <Route
              path="/movie/:movieId"
              element={<MovieDetailsPage />}></Route>
            <Route path="/person/:personId" element={<InfoPerson />}></Route>
            <Route path="/genre" element={<GenrePage />}></Route>
            <Route path="/genre/:genreId" element={<GenrePage />}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
