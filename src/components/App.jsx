import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { HomePage } from './page/HomePage';
import { AddPage } from './page/AddPage';

export const App = () => {
  return (
    <Routes>
      <Route element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
      </Route>
    </Routes>
  );
};
