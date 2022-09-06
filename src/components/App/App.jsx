import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
  const { data, isSuccess } = useFetchCurrentUserQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(refreshUser(data));
    }
  }, [data, dispatch, isSuccess]);

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <Header />
      <MainPage>
        <Suspense>
          <Routes>
            {/* PABLIC */}
            <Route
              path="/expenses"
              element={
                !isLoggedIn ? <Navigate to="/" replace /> : <ExpensesPage />
              }
            />
            <Route
              path="/income"
              element={
                !isLoggedIn ? <Navigate to="/" replace /> : <IncomePage />
              }
            />
            <Route
              path="/report"
              element={
                !isLoggedIn ? <Navigate to="/" replace /> : <ReportPage />
              }
            />
            <Route
              path="/income/input"
              element={
                !isLoggedIn ? <Navigate to="/" replace /> : <IncomeInputPage />
              }
            />
            <Route
              path="/expenses/input"
              element={
                !isLoggedIn ? (
                  <Navigate to="/" replace />
                ) : (
                  <ExpensesInputPage />
                )
              }
            />

            {/* PRIVATE */}
            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <Navigate to="/expenses" replace />
                ) : (
                  <ExpensesPage />
                )
              }
            />
          </Routes>
          {/* <Routes>
            <Route element={<PublicRoute redirectTo="/expenses" restricted />}>
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
              <Route path="/expenses/input" element={<ExpensesInputPage />} />
            </Route>

            <Route element={<PrivateRoute redirectTo="/" />}>
              <Route path="/report" element={<ReportPage />} />
            </Route>

            <Route element={<PublicRoute redirectTo="/expenses" />}>
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes> */}
        </Suspense>
      </MainPage>
    </>
  );
}

export default App;
