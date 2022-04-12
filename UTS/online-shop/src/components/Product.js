import React from 'react'
import { Card, Col } from 'react-bootstrap'

const Product = ({ menu, masukKeranjang }) => {
    return (
        <Col md={3} xs={6} className="mb-4">
            <Card className='shadow' onClick={() => masukKeranjang(menu)}>
                <Card.Img variant="top" src={menu.img} />
                <Card.Body>
                    <Card.Title className='text-center'>{menu.nama}</Card.Title>
                    <Card.Text className='text-center text-danger'>
                        Rp. {numberWithCommas(menu.harga)}
                    </Card.Text>
                    <strong><h5> Stok ({menu.stok}) </h5> </strong>
                </Card.Body>
            </Card>
        </Col>
    )
}

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default Product