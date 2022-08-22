import  ModalPopup  from './ModalPopup'
import React,{useState} from 'react'

import './card.scss'

const Card = ({ post }) => {
  console.log(post.id)
  
  return (
     
    <div className='card_container'>
      <div className="card">
        <img src={post.thumbnail.small} alt={post.title} />
        <div className="circles">
          <div className="circle-1 "></div>
          <div className="circle-2 "></div>
        </div>
        <h2>{post.name}</h2>
        <p>{post.content} </p>

        <div className="author_container">
          <div className="author">
            <span>{post.author.name}</span>
            <span>{post.author.name} - {post.author.role}</span>
          </div>
          <span className='date'>{new Date(post.date).toDateString()}</span>
        </div>

      </div>
    </div>   
  
  )
}

export default Card