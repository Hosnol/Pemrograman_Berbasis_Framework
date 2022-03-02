// agar fuction arrow bisa di panggil di reach maka tambahkan reacht
import React from 'react';
import'./HelloComponent.css';

const HelloComponent = () => {
    return (
        <p className="text-p">ini adalah arrow fuction yang ada di folder</p>
    )
}
// agar komponen dapat digunakan dimana saja
export default HelloComponent;