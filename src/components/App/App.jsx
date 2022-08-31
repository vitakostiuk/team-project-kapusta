import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/feature/auth-selectors';
// import LoginPage from '../../pages/LoginPage';
// import HomePage from '../../pages/HomePage';
// import ReportPage from '../../pages/ReportPage';

import Header from '../Header';
import MainPage from '../MainPage';

const LoginPage = lazy(() =>
  import('../../pages/LoginPage' /* webpackChunkName: 'LoginPage' */),
);
const HomePage = lazy(() =>
  import('../../pages/HomePage' /* webpackChunkName: 'HomePage' */),
);
const ReportPage = lazy(() =>
  import('../../pages/ReportPage' /* webpackChunkName: 'ReportPage' */),
);

const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage' /* webpackChunkName: 'NotFoundPage' */),
);

function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      <Header />
      <MainPage>
        <Suspense>
          <Routes>
            {/* NOT AUTH */}
            <Route
              path="login"
              element={
                isLoggedIn ? <LoginPage /> : <LoginPage to="login" replace />
              }
            />

            {/* AUTH */}
            <Route
              path="/"
              element={
                !isLoggedIn ? <LoginPage to="login" replace /> : <HomePage />
              }
            />
            <Route
              path="report"
              element={
                !isLoggedIn ? <LoginPage to="login" replace /> : <ReportPage />
              }
            />
            <Route path="=login" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </MainPage>
    </>
  );
}

export default App;
