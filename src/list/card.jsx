import React from 'react'
import './cards.css';
export default function card({item}) {
    const { id, title, author, price, img, rating } = item;
    return (
            <div className='Card_child'> 
                <div className='Card_img_parent'>
                    <img src={img}></img>
                </div>
                <div className='button_parent'>
                    <div className='btn-child'>
                        <a href=''>Button</a>
                    </div>
                </div>
            </div>
    )
}
