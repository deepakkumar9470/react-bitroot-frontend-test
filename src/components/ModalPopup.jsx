import React from 'react'
import Card from './Card';

import './modal.scss'

const ModalPopup = ({post,id,open,setOpen}) => {
 
  if(!open) return null;


  return (
    <div className='popupWrapper'>
        <div className="modal">
           <button className='btn_close' onClick={()=>setOpen(false)}>X</button>
           <div className='card_container'>
      <div className="card">
        <img src={post.thumbnail.small} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.content} </p>

        <div className="author_container">
          <div className="author">
            <img className='avatar_img' src={post.author.avatar} alt={post.author.name} />
            <span>{post.author.name} - {post.author.role}</span>
          </div>
        </div>

      </div>


     
    </div>
        </div>
    </div>
  )
}

export default ModalPopup