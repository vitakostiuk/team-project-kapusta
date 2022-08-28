import { Routes, Route } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/HomePage';
import ReportPage from '../../pages/ReportPage';

import Header from '../Header';
import s from './App.module.css';

function App() {
  return (
    <div className={s.layout}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="report" element={<ReportPage />} />
      </Routes>
    </div>
  );
}

export default App;
