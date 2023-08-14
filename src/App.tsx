import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './shared/components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<HomePage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
