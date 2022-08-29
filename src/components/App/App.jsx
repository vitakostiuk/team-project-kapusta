import { Routes, Route } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/HomePage';
import ReportPage from '../../pages/ReportPage';

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
        </Routes>
      </MainPage>
    </>
  );
}

export default App;
