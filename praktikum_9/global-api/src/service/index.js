import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

// Daftar API - GET
const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');

// Daftar API - POST 
const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);

// Daftar API - DELETE 
const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI('posts', dataYgDiHapus);

// Daftar API - GET
const getMahasiswa = () => GetAPI('mahasiswa?_sort=id&_order=desc');

// Daftar API - POST 
const postMahasiswa = (dataYgDikirim) => PostAPI('mahasiswa', dataYgDikirim);

// Daftar API - DELETE 
const deleteMahasiswa = (dataYgDiHapus) => DeleteAPI('mahasiswa', dataYgDiHapus);

const API = { //inisialisasi fuction-fuction yang akan disediakan global API
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog,
    getMahasiswa,
    postMahasiswa,
    deleteMahasiswa
};

export default API;