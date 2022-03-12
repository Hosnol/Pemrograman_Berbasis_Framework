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

class BlogPost extends Component{
    state = {               // komponen state dari React untuk statedull component
        listArtikel : []    // variable array yang digunakan untuk menyimpan data API
    }

    componentDidMount(){   // fungsi yang akan dijalankan ketika component telah di mount
        fetch('http://localhost:3001/posts') // alamat URL API yang akan di ambil
        .then(response => response.json()) // response dari API dalam bentuk JSON
        .then(json => {
            this.setState({
                listArtikel: json
            })
        })
    }

    render(){
        return(
            <div className="post-artikel">
                <h2>Daftar Artikel</h2>
                {this.state.listArtikel.map(artikel => {
                    return <Post key={artikel.id} judul={artikel.title} isi={artikel.body}/>
                })}
            </div>
        );
    }

}
export default BlogPost;