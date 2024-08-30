import ReactDOM from 'react-dom/client';
import App from './App';
/*
    추가 설치해야 하는 패키지 목록
    react-router-dom
    redux
    react-redux
    redux-thunk
    redux-logger
    redux-devtools-extension

    // npm install redux react-redux redux-thunk redux-actions redux-logger
    // npm install --save @redux-devtools/ex
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
