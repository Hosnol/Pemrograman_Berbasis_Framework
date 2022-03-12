import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";

// class BlogPost extends Component{
//     render(){
//         return(
//             <p>Blog Article</p>
//         );
//     }
// } export default BlogPost;

// class BlogPost extends Component{
//     render(){
//         return(
//             <div className="post-artikel">
//                 <h2>Daftar Artikel</h2>
//                 <div className="artikel">
//                     <div className="gambar-artikel">
//                         <img src="http://placeimg.com/120/120/any" alt="gambar tumnail artikel"/>
//                     </div>
//                         <div className="konten-artikel">
//                             <div className="judul-artikel">Judul Artikel</div>
//                             <p class="isi-artikle">Isi artikel</p>
//                         </div>
//                 </div>
//             </div>
//         );
//     }
// }export default BlogPost;

// class BlogPost extends Component{
//     render(){
//         return(
//             <div className="post-artikel">
//                 <h2>Daftar Artikel</h2>
//                 <Post />
//             </div>
//         );
//     }
// }export default BlogPost;

// class BlogPost extends Component{
//     render(){
//         return(
//             <div className="post-artikel">
//                 <h2>Daftar Artikel</h2>
//                 <Post judul="JTI polinema" isi="Jurusan Teknologi Informasi - Politeknik Negeri Malang"/>
//             </div>
//         );
//     }
// }export default BlogPost;

// class BlogPost extends Component{
//     state = {               // komponen state dari React untuk statedull component
//         listArtikel : []    // variable array yang digunakan untuk menyimpan data API
//     }

//     componentDidMount(){   // fungsi yang akan dijalankan ketika component telah di mount
//         fetch('http://localhost:3001/posts') // alamat URL API yang akan di ambil
//         .then(response => response.json()) // response dari API dalam bentuk JSON
//         .then(json => {
//             this.setState({
//                 listArtikel: json
//             })
//         })
//     }

//     render(){
//         return(
//             <div className="post-artikel">
//                 <h2>Daftar Artikel</h2>
//                 {this.state.listArtikel.map(artikel => {
//                     return <Post key={artikel.id} judul={artikel.title} isi={artikel.body}/>
//                 })}
//             </div>
//         );
//     }

// }
// export default BlogPost;

// class BlogPost extends Component{
//     state = {               // komponen state dari React untuk statedull component
//         listArtikel : []    // variable array yang digunakan untuk menyimpan data API
//     }

//     ambilDataDariServerAPI = () => {
//         fetch('http://localhost:3001/posts') // alamat URL API yang akan di ambil
//         .then(response => response.json()) // response dari API dalam bentuk JSON
//         .then(jsonHasilAmbilDariAPI => {
//             this.setState({
//                 listArtikel: jsonHasilAmbilDariAPI
//             })
//         })
//     }

//     componentDidMount(){   // fungsi yang akan dijalankan ketika component telah di mount
//         this.ambilDataDariServerAPI() // ambil data dari server API lokal
//     }

//     // handle delete button
//     handleHapusArtikel = (data) => { // fungsi yang akan di panggil ketika tombol hapus di klik
//         fetch(`http://localhost:3001/posts/${data}`, {method: 'delete'}) // alamat URL API yang akan di ambil
//         .then(res => { // response dari API dalam bentuk JSON
//             this.ambilDataDariServerAPI()
//         })
//     }

//     render(){
//         return(
//             <div className="post-artikel">
//                 <h2>Daftar Artikel</h2>
//                 {
//                     this.state.listArtikel.map(artikel => {
//                         return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} hapusArtikel={this.handleHapusArtikel} idArtikel={artikel.id}/>
//                     })
//                 }
//             </div>
//         );
//     }

// }
// export default BlogPost;

class BlogPost extends Component{
    state = {               // komponen state dari React untuk statedull component
        listArtikel : [],    // variable array yang digunakan untuk menyimpan data API
        InsertArtikel : {
            userId: 1,
            id: 1,
            title: '',
            body: ''
        }
    } 

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/posts') // alamat URL API yang akan di ambil
        .then(response => response.json()) // response dari API dalam bentuk JSON
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                listArtikel: jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount(){   // fungsi yang akan dijalankan ketika component telah di mount
        this.ambilDataDariServerAPI() // ambil data dari server API lokal
    }

    // handle delete button
    handleHapusArtikel = (data) => { // fungsi yang akan di panggil ketika tombol hapus di klik
        fetch(`http://localhost:3001/posts/${data}`, {method: 'delete'}) // alamat URL API yang akan di ambil
        .then(res => { // response dari API dalam bentuk JSON
            this.ambilDataDariServerAPI()
        })
    }

    // handle insert button
    handleTambahArtikel = (event) => { // fungsi yang akan di panggil ketika tombol tambah di klik
        let formInsertArtikel = {...this.state.InsertArtikel}; // mengambil state InsertArtikel dan di clone
        let timestamp = new Date().getTime(); // digunakan untuk mengambil waktu saat ini
        formInsertArtikel["id"] = timestamp; // mengisi field id dengan waktu saat ini
        formInsertArtikel[event.target.name] = event.target.value; // mengisi field dengan properti name dan value
        this.setState({
            InsertArtikel: formInsertArtikel
        })
    }

    // tombol simpan
    handleTombolSimpan = () => {  //fungsi untuk menghandle tombol simpan
        fetch('http://localhost:3001/posts', {
            method: 'post',
            headers: {  
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.InsertArtikel)
        })
        .then(res => { // response dari API dalam bentuk JSON
            this.ambilDataDariServerAPI() //reload atau refresh data
        })
    }

    
    render(){
        return(
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambahArtikel}/>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" id="body" name="body" rows="3" onChange={this.handleTambahArtikel}></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                    </div>
                </div>
                <h2> Daftar Artikel </h2>
                {
                    this.state.listArtikel.map(artikel => { // looping data dari API
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} hapusArtikel={this.handleHapusArtikel} idArtikel={artikel.id}/> 
                    })
                }
            </div>
        );
    }

}
export default BlogPost;