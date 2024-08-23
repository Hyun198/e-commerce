import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './pages/ProductAll/ProductAll'
import Login from './pages/Login/Login'
import Navbar from './components/Navbar/Navbar';
import PrivateRoute from './route/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';

//3. 상품디테일페이지
//4. 로그아웃기능
//5. 마이페이지
//6. 장바구니페이지
//7. 상품 검색 페이지
function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path='/product/:id' element={<PrivateRoute />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
