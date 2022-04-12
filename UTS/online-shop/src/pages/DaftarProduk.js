import { Container, Col, Row } from 'react-bootstrap';
import Keranjang from '../components/Keranjang';
import Product from '../components/Product';
import React, { Component } from 'react'
import axios from "axios";
import swal from "sweetalert";

export default class DaftarProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [],
      keranjangs: []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/products")
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });

      this.getListKeranjang();
  }

  getListKeranjang = () => {
    axios
      .get("http://localhost:3002/keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        this.setState({ keranjangs });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  }

  masukKeranjang = (value) => {
    axios
      .get("http://localhost:3002/keranjangs?product.id=" + value.id)
      .then((res) => {
        if (res.data.length === 0) {
          const keranjang = {
            jumlah: 1,
            total_harga: value.harga,
            product: value
          }

          axios
            .post("http://localhost:3002/keranjangs", keranjang)
            .then((res) => {
              swal({
                title: "Sukses",
                text: "Produk" + value.nama + " Berhasil Masuk Keranjang",
                icon: "success",
                button: false,
                timer: 1500
              })
            })
            .catch((error) => {
              console.log("Error yaa ", error);
            });
        } else {
          const keranjang = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value
          }

          axios
            .put("http://localhost:3002/keranjangs/" + res.data[0].id, keranjang)
            .then((res) => {
              this.getListKeranjang();
              swal({
                title: "Sukses",
                text: "Produk" + value.nama + " Berhasil Diperbarui",
                icon: "success",
                button: false,
                timer: 1500
              })
            })
            .catch((error) => {
              console.log("Error yaa ", error);
            });
        }
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  }


  render() {
    const { menus, keranjangs } = this.state;
    return (
        <div className="mt-3">
          <Container fluid>
            <Row>
              <Col className='text-center'>
                <h4>
                  <strong>Daftar Produk</strong>
                </h4>
                <hr />
                <Row>
                  {menus &&
                    menus.map((menu) => (
                      <Product
                        key={menu.id}
                        menu={menu}
                        masukKeranjang={this.masukKeranjang}
                      />
                    ))}
                </Row>
              </Col>
              <Keranjang keranjangs={keranjangs} {...this.props}/>
            </Row>
          </Container>
        </div>
    )
  }
}
