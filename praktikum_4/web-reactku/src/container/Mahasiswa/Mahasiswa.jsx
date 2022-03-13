import React, {Component} from "react";
import Post from "../../component/Mahasiswa/Post";

class Mahasiswa extends Component {
    state = {               // komponen state dari React untuk statedull component
        listMahasiswa : [],   // variable array yang digunakan untuk menyimpan data API
        InsertMahasiswa : {
            userId: 1,
            id: 1,
            nim : '',
            nama: '',
            alamat: '',
            hp: '',
            angkatan: '',
            status: ''
        }
    }
        
    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/mahasiswa') // alamat URL API yang akan di ambil
        .then(response => response.json()) // response dari API dalam bentuk JSON
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                listMahasiswa: jsonHasilAmbilDariAPI
            })
        })
    }
        
    componentDidMount(){   // fungsi yang akan dijalankan ketika component telah di mount
        this.ambilDataDariServerAPI() // ambil data dari server API lokal
    }
        
    // handle delete button
    handleHapusMahasiswa = (data) => { // fungsi yang akan di panggil ketika tombol hapus di klik
        fetch(`http://localhost:3001/mahasiswa/${data}`, {method: 'delete'}) // alamat URL API yang akan di ambil
        .then(res => { // response dari API dalam bentuk JSON
            this.ambilDataDariServerAPI()
        })
    }
    
    
    handleTambahMahasiswa = (event) => { // fungsi yang akan di panggil ketika tombol tambah di klik
        let formInsertMahasiswa = {...this.state.InsertMahasiswa}; // cara membuat variabel baru dengan mengambil value dari state InsertMahasiswa
        let timestamp = new Date().getTime(); // digunakan untuk mengambil nilai timestamp pada saat proses insert data
        formInsertMahasiswa['id'] = timestamp // mengisi field id dengan nilai timestamp
        formInsertMahasiswa[event.target.name] = event.target.value; // mengisi kolom dengan name inputan dan value inputan
        this.setState({
            InsertMahasiswa: formInsertMahasiswa
            })
    }

    // tombol simpan
    handleTombolSimpan = () => {  //fungsi untuk menghandle tombol simpan
        fetch('http://localhost:3001/mahasiswa', {
            method: 'post',
            headers: {  
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.InsertMahasiswa)
        })
        .then(res => { // response dari API dalam bentuk JSON
            this.ambilDataDariServerAPI() //reload atau refresh data
        })
    }
    
    render(){
        return(
            <div className="mahasiswa">
                <h2>Tambah Mahasiswa</h2>
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="nim" className="col-sm-2 col-form-label">Nim</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nim" name="nim" placeholder="Nim" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nama" name="nama" placeholder="Nama" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="alamat" name="alamat" placeholder="Alamat" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="no_hp" className="col-sm-2 col-form-label">No Hp</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="hp" name="hp" placeholder="No Hp" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahMahasiswa}>
                                <option value="">Pilih Angkatan</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="status" name="status" onChange={this.handleTambahMahasiswa}>
                                <option value="">Pilih Status</option>
                                <option value="aktif">Aktif</option>
                                <option value="lulus">Lulus</option>
                                <option value="cuti">Cuti</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-primary" onClick={this.handleTombolSimpan}>Tambah</button>
                        </div>
                    </div>
                </div>
                <h2>Daftar Mahasiswa</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th> NIM </th>
                            <th> Nama </th>
                            <th> Alamat </th>
                            <th> No.HP </th>
                            <th> Angkatan </th>
                            <th> Status</th>
                            <th> Aksi </th>
                        </tr>
                    </thead>
                        {
                            this.state.listMahasiswa.map(mahasiswa => { // looping data mahasiswa yang ada di state
                                return <Post key={mahasiswa.id} nama={mahasiswa.nama} nim={mahasiswa.nim} alamat={mahasiswa.alamat} no_hp={mahasiswa.hp} angkatan={mahasiswa.angkatan} status={mahasiswa.status} hapusMahasiswa={this.handleHapusMahasiswa} idMahasiswa={mahasiswa.id}/> // menampilkan data mahasiswa yang ada di state
                            })
                        }
                </table>
            </div>
            );
        }
}
export default Mahasiswa;