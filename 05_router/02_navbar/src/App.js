import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Login from './pages/Login';
import MyPage from './pages/MyPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='mypage' element={<MyPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <BrowserRouter>
        <Routes>
          <Route path='/parents' element={<Layout/>}>   기준이 되는 기본 주소를 /parents로 바꿈
            <Route index element={<Main/>}/>            index: 기본적으로 Main 페이지가 보여짐
            <Route path='login' element={<Login/>}/>
            <Route path='mypage' element={<MyPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
