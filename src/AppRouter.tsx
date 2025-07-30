import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import TradesmenPartners from './components/TradesmenPartners';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tradesmen-partners" element={<TradesmenPartners />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
