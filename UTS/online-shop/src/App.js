import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import DaftarProduct from './pages/DaftarProduk'
import Home from './pages/Home'
import About from './pages/About'
import Sukses from './pages/Sukses'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/ListProduct' component={DaftarProduct}/>
          <Route path='/About' component={About}/>
          <Route path='/sukses' component={Sukses}/>
        </Switch>
      </BrowserRouter>
    )
  }
}