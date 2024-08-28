import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Login from './pages/Login';
import Error from './pages/Error';
import MyPage from './pages/MyPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path='mypage' element={<MyPage/>}/>
            <Route path='login' element={<Login/>}/>
            
            <Route path='*' element={<Error/>}/>  {/* 404 에러와 관련된 페이지 */}{/* 레이아웃을 보여주고 싶을 때 */}
          </Route>

          {/* <Route path='*' element={<Error/>}/> => 레이아웃을 보여주고 싶지 않을 때 */}  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
