import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './pages/ProductAll/ProductAll'
import Login from './pages/Login/Login'
import Navbar from './components/Navbar/Navbar';
import PrivateRoute from './route/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
import ProductCart from './pages/ProductCart/ProductCart';
import Payment from './pages/Payment/Payment';
import Footer from './components/footer/Footer';

//개선사항
//1. 위시리스트
//2. 상품 정보를 함께 넘기기 (사이즈, 색상, )
//3. 결제 페이지
//4. 디테일 페이지에서 결제 페이지로 이동

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path='/product/:id' element={<PrivateRoute />} />
        <Route path="/cart" element={<ProductCart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
