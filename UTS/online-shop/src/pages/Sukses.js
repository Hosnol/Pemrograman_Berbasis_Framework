import React, { Component } from 'react'
import { Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from "axios"

export default class Sukses extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:3002/keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        keranjangs.map(function(item) {
            return axios
                .delete("http://localhost:3002/keranjangs/"+item.id)
                .then((res) => console.log(res))
                .catch((error) => console.log(error))
        })
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  }

  render() {
    return (
      <div className='mt-4 text-center'>
          <Image src='./img/undraw_Successful_purchase_re_mpig.png' alt='sukses'width={500} />
          <h2>Sukses Checkout</h2>
          <p>Pesanan anda sedang diproses</p>
          <strong><p>Terima kasih telah berbelanja di Online Shop</p></strong>
          <Button variant="primary" as={Link} to="ListProduct">Kembali </Button>
      </div>
    )
  }
}
