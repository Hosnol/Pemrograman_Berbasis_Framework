import React, { Component } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

export default class TotalBayar extends Component {
  submitTotalBayar = (totalBayar) => {
    const pesanan = {
        total_bayar: totalBayar,
        menus: this.props.keranjangs
    }

    axios.post("http://localhost:3001/pesanans", pesanan).then((res) => {
        this.props.history.push('/sukses')
    })
};
  render() {
    const totalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);
    return (
      <div className="fixed-bottom d-none d-md-block">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h5> Total Harga : { " "}
              <strong className='ml-5'> Rp. {numberWithCommas(totalBayar)} </strong> </h5>
            <Button
              variant="primary"
              block = "true"
              className="mb-2 mt-2 mr-2"
              size="lg"
              onClick={() => this.submitTotalBayar(totalBayar)}>
              <FontAwesomeIcon icon={faShoppingCart} /> <strong>BAYAR</strong>
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}