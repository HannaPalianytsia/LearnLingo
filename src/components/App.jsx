import { Suspense, lazy } from 'react';
import Navigation from './Navigation/Navigation.jsx';
import Loader from './Loader/Loader.jsx';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const TeachersPage = lazy(() =>
  import('../pages/TeachersPage/TeachersPage.jsx')
);
const FavoritesPage = lazy(() =>
  import('../pages/FavoritesPage/FavoritesPage.jsx')
);
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage/NotFoundPage.jsx')
);

export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
