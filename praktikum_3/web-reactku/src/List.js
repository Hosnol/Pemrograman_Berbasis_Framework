import React, { Component } from 'react';
import Image from './Image';

class List extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li>Satu 
                        <Image linkGambar='https://glints.com/id/lowongan/wp-content/uploads/2020/04/sky-space-milky-way-stars-110854-min-scaled.jpg'/></li>
                    <li>Dua 
                        <Image linkGambar='https://glints.com/id/lowongan/wp-content/uploads/2020/04/sky-space-milky-way-stars-110854-min-scaled.jpg'/></li>
                    <li>Tiga 
                        <Image linkGambar='https://glints.com/id/lowongan/wp-content/uploads/2020/04/sky-space-milky-way-stars-110854-min-scaled.jpg'/></li>
                    <li>Empat 
                        <Image linkGambar='https://glints.com/id/lowongan/wp-content/uploads/2020/04/sky-space-milky-way-stars-110854-min-scaled.jpg'/></li>
                </ol>
            </div>
        );
    }
} export default List;