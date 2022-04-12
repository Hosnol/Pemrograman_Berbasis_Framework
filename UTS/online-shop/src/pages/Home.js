import React, { Component } from 'react'
import { Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
    <div className='mr-5 ml-5 mt-4 text-center'>
        <Image src='./img/undraw_Landing_page_re_6xev.png' alt='page'width={650} />
        <h2><strong>WELCOME TO ONLINE SHOP</strong></h2>
        <p className='m5'> Online Shop adalah sebuah website yang menyediakan berbagai 
            macam produk yang bisa anda beli dengan harga yang terjangkau.
            Tempat untuk membeli barang elektronik berupa mesin cuci
            yang terpercaya dan terlengkap. Kami menyediakan berbagai
            macam produk yang berkualitas.
        </p>
        <Button variant="outline-primary" as={Link} to="ListProduct">Mari Berbelanja </Button>
    </div>
    )
  }
}
