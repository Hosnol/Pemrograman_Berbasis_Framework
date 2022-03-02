import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloComponent from './component/HelloComponent';
import FormLogin from './component/FormLogin';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// Membuat fuction
// function HelloComponent() {
//   return (
//     <div>
//     <p>HelloComponent</p>
//     </div>
//   );
// }
// ReactDOM.render(<HelloComponent/>, document.getElementById('root'));


// Membuat class
// class StateFullComponent extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>StateFullComponent</h1>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<StateFullComponent/>, document.getElementById('root'));


// Lificycle
// class Test extends React.Component {  
//   constructor(props)  
//   {  
//       super(props);  
//       this.state = { hello : "World!" };  
//   }  
 
//   componentWillMount()  
//   {  
//       console.log("componentWillMount()");  
//   }  
 
//   componentDidMount()  
//   {  
//       console.log("componentDidMount()");  
//   }  
 
//   changeState()  
//   {  
//       this.setState({ hello : "Geek!" });  
//   }  
 
//   render()  
//   {  
//       return (  
//           <div>  
//           <h1>GeeksForGeeks.org, Hello{ this.state.hello }</h1>  
//           <h2>  
//           <a onClick={this.changeState.bind(this)}>Press Here!</a>  
//           </h2>  
//           </div>);  
//   }  
 
//   shouldComponentUpdate(nextProps, nextState)  
//   {  
//       console.log("shouldComponentUpdate()");  
//       return true;  
//   }  
 
//   componentWillUpdate()  
//   {  
//       console.log("componentWillUpdate()");  
//   }  
 
//   componentDidUpdate()  
//   {  
//       console.log("componentDidUpdate()");  
//   }  
// }   
// ReactDOM.render(<Test />, document.getElementById('root'));

ReactDOM.render(<FormLogin />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
