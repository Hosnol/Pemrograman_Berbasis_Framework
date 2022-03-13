import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'; // import bootstrap
import App from './App';
import reportWebVitals from './reportWebVitals';

import BlogPost from './container/BlogPost/BlogPost'; // import BlogPost
import Mahasiswa from './container/Mahasiswa/Mahasiswa'; // import Mahasiswa

// ReactDOM.render(<BlogPost/>, document.getElementById('root')); // render BlogPost dengan Id Root

// ReactDOM.render(<BlogPost/>, document.getElementById('content')); // render BlogPost dengan Id content

ReactDOM.render(<Mahasiswa/>, document.getElementById('content')); // render Mahasiswa dengan Id content

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
