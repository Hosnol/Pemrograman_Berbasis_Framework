import React from 'react';

const Footer = (props) => {
  return (
    <div>
      <h3>Halaman Footer</h3>
      <h3>Component ini dibuat menggunakan fuction bukan class</h3>
      <p>Nilai ini ditampilkan dari props: { props.judul }</p>
      <p>Nama saya: { props.nama }</p>
    </div>
  );
} 
export default Footer;