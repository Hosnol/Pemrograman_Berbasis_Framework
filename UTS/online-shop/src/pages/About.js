import React from 'react'
import { Image } from 'react-bootstrap'

const About = () => { 
    return (
        <div className='text-center'>
            <Image roundedCircle src='./img/undraw_profile_pic_ic5t.png' alt='page' width={250} />
            <p>{name("Hosnol Arifin")}</p>
            <p>{kelas("TI3D")}</p>
            <p>{matkul("Pemograman Berbasis Web")}</p>
            <p>{jurusan("Teknik Informatika")}</p>
        </div>
    )
  }

const name = (n) =>{
    return(
        <h5>{n}</h5>
    )
}

const kelas = (n) =>{
    return(
        <h5>{n}</h5>
    )
}

const matkul = (n) =>{
    return(
        <h5>{n}</h5>
    )
}
const jurusan = (n) =>{
    return(
        <h5>{n}</h5>
    )
}

export default About