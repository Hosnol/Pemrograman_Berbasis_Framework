import React, { Component } from 'react';
import { Badge, Col, ListGroup, Row } from 'react-bootstrap';
import TotalBayar from './TotalBayar';

export default class Keranjang extends Component {
    render() {
        const { keranjangs } = this.props;
        return (
            <Col md={3} mt="2" >
                <h4 className='text-center'><strong>Keranjang</strong></h4>
                <hr />
                {keranjangs.length !== 0 && (
                    <ListGroup variant="flush">
                        {keranjangs.map((keranjang) => (
                            <ListGroup.Item key={keranjang.id}>
                                <Row>
                                    <Col xs={2}>
                                        <h4>
                                            <Badge pill bg="success">
                                                {keranjang.jumlah}</Badge>
                                        </h4>
                                    </Col>
                                    <Col>
                                        <h5>{keranjang.product.nama}</h5>
                                        <p>Rp. {numberWithCommas(keranjang.product.harga)}</p>
                                    </Col>
                                    <Col>
                                        <strong className='float-right'>Rp. {numberWithCommas(keranjang.total_harga)}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
                <TotalBayar keranjangs={keranjangs} {...this.props}/>
            </Col>
        )
    }
}

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}