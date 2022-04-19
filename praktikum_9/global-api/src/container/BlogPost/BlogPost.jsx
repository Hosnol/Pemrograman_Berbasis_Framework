import React, { Component } from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";
import API from "../../service";

class BlogPost extends Component {
    state = {               // komponen state dari React untuk statedull component
        listArtikel: [],    // variable array yang digunakan untuk menyimpan data API
        InsertArtikel: {
            userId: 1,
            id: 1,
            title: '',
            body: ''
        }
    }

    ambilDataDariServerAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                listArtikel: result
            })
        })
    }

    componentDidMount() {   // fungsi yang akan dijalankan ketika component telah di mount
        this.ambilDataDariServerAPI() // ambil data dari server API lokal
    }

    // handle delete button
    handleHapusArtikel = (data) => { // fungsi yang akan di panggil ketika tombol hapus di klik
        API.deleteNewsBlog(data)
            .then(result => {
                this.ambilDataDariServerAPI()
            })
    }

    // handle insert button
    handleTambahArtikel = (event) => { // fungsi yang akan di panggil ketika tombol tambah di klik
        let formInsertArtikel = { ...this.state.InsertArtikel }; // mengambil state InsertArtikel dan di clone
        let timestamp = new Date().getTime(); // digunakan untuk mengambil waktu saat ini
        formInsertArtikel["id"] = timestamp; // mengisi field id dengan waktu saat ini
        formInsertArtikel[event.target.name] = event.target.value; // mengisi field dengan properti name dan value
        this.setState({
            InsertArtikel: formInsertArtikel
        })
    }

    // tombol simpan
    handleTombolSimpan = () => {  //fungsi untuk menghandle tombol simpan
        API.postNewBlog(this.state.InsertArtikel) // mengirim data ke API
            .then((res) => { // response dari API dalam bentuk JSON
                this.ambilDataDariServerAPI() // ambil data dari server API
            })

    }


    render() {
        return (
            <div className="container-fluid mt-2">
                <div className="post-artikel">
                    <div className="form pb-2 border-bottom">
                        <div className="form-group row">
                            <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambahArtikel} />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" id="body" name="body" rows="3" onChange={this.handleTambahArtikel}></textarea>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary mt-2" onClick={this.handleTombolSimpan}>Simpan</button>
                        </div>
                    </div>
                    <h2> Daftar Artikel </h2>
                    {
                        this.state.listArtikel.map(artikel => { // looping data dari API
                            return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} hapusArtikel={this.handleHapusArtikel} idArtikel={artikel.id} />
                        })
                    }
                </div>
            </div>
        );
    }

}
export default BlogPost;