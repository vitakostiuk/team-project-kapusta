import { Routes, Route } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/HomePage';
import ReportPage from '../../pages/ReportPage';
import ExpensesPage from '../../pages/ExpensesPage';
import IncomePage from '../../pages/IncomePage';

import Header from '../Header';
import MainPage from '../MainPage';

function App() {
  return (
    <>
      <Header />
      <MainPage>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="report" element={<ReportPage />} />
          <Route path="expenses" element={<ExpensesPage />} />
          <Route path="income" element={<IncomePage />} />
        </Routes>
      </MainPage>
    </>
  );
}

export default App;
