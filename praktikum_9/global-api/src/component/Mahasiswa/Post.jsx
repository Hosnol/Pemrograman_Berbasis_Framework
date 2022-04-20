import React from "react";

const Post = (props) => {
    return (
        <tbody>
        <tr>
            <td> {props.nim} </td>
            <td> {props.nama} </td>
            <td> {props.alamat} </td>
            <td> {props.no_hp} </td>
            <td> {props.angkatan} </td>
            <td> {props.status} </td>
            <td> <button className="btn btn-sm btn-danger" onClick={() =>props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
            </td>
        </tr>
        </tbody>
    );
} 
export default Post;