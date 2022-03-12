import React from "react";

const Post = (props) => {
    return (
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeimg.com/120/120/any" alt="gambar tumnail artikel"/>
            </div>
            <div className="konten-artikel">
                <div className="judul-artikel">{props.judul}</div>
                    <p className="isi-artikle">{props.isi}</p>
                </div>
        </div>
    );
} 
export default Post;