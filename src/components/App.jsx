import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from "./Layout/Layout";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

const HomePage = lazy(() => import('pages/Home/Home'));
const MoviesPage = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Layout />}>
             <Route index element={<HomePage />}/>
             <Route path="movies/:movieId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />}/>
                <Route path="reviews" element={<Reviews />}/> 
             </Route>
             <Route path="movies" element={<MoviesPage />}/>
             <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>

        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" />       
    </div>
  );
};

export default App
