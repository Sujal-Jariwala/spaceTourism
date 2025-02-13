import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/globals.scss';
import { HashRouter, Routes, Route } from 'react-router';
import Explore from './components/Explore/Explore.tsx';
import Destination from './components/Destination/Destination.tsx';
import Crew from './components/Crew/Crew.tsx';
import Technology from './components/Technology/Technology.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Explore />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
          <Route path="*" element={<Explore />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
