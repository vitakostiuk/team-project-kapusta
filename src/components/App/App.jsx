import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import authSelectors from '../../redux/feature/auth-selectors';
import { useFetchCurrentUserQuery } from '../../redux/authorization/authApi';
import { refreshUser } from '../../redux/feature/authSlice';
import { PrivateRoute } from '../../utils/PrivateRoute';
import { PublicRoute } from '../../utils/PublicRoute';
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
const ExpensesPage = lazy(() =>
  import('../../pages/ExpensesPage' /* webpackChunkName: 'ExpensesPage' */),
);
const IncomePage = lazy(() =>
  import('../../pages/IncomePage' /* webpackChunkName: 'IncomePage' */),
);
const ExpensesInputPage = lazy(() =>
  import(
    '../../pages/ExpensesInputPage/ExpensesInputPage' /* webpackChunkName: 'ExpensesInputPage' */
  ),
);
const IncomeInputPage = lazy(() =>
  import(
    '../../pages/IncomeInputPage/IncomeInputPage' /* webpackChunkName: 'IncomeInputPage' */
  ),
);

const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage' /* webpackChunkName: 'NotFoundPage' */),
);

function App() {
  const { data, isSuccess, isFetching } = useFetchCurrentUserQuery();
  // console.log('user', data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(refreshUser(data));
    }
  }, [data, dispatch, isSuccess]);

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      {!isFetching && (
        <>
          <Header />
          <MainPage>
            <Suspense>
              <Routes>
                <Route
                  element={<PublicRoute redirectTo="/expenses" restricted />}
                >
                  <Route index element={<LoginPage />} />
                </Route>

                <Route
                  path="/"
                  element={
                    !isLoggedIn ? <PrivateRoute redirectTo="/" /> : <HomePage />
                  }
                >
                  <Route element={<PrivateRoute redirectTo="/" />}>
                    <Route path="/expenses" element={<ExpensesPage />} />
                  </Route>

                  <Route element={<PrivateRoute redirectTo="/" />}>
                    <Route path="/income" element={<IncomePage />} />
                  </Route>
                </Route>

                <Route element={<PrivateRoute redirectTo="/" />}>
                  <Route path="/income/input" element={<IncomeInputPage />} />
                </Route>

                <Route element={<PrivateRoute redirectTo="/" />}>
                  <Route
                    path="/expenses/input"
                    element={<ExpensesInputPage />}
                  />
                </Route>

                <Route element={<PrivateRoute redirectTo="/" />}>
                  <Route path="/report" element={<ReportPage />} />
                </Route>

                <Route element={<PublicRoute redirectTo="/expenses" />}>
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </Suspense>
          </MainPage>
        </>
      )}
      <ToastContainer position="top-right" autoClose={3000} limit={1} />
    </>
  );
}

export default App;
