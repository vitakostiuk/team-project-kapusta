import { Routes, Route } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/HomePage';
import ReportPage from '../../pages/ReportPage';

import Header from '../Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="report" element={<ReportPage />} />
      </Routes>
    </>
  );
}

export default App;
