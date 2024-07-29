import React from 'react'
import { BookText } from '../../data/Book'
import { Link } from 'react-router-dom'

const Book = () => {
  return (
    <section id='book'>
      <h2>📕추천 도서를 소개합니다</h2>
      <div className='video__inner'>
      {BookText.map((book, key)=>(
        <div className='video' key={key}>
          <div className='video__thumb play__icon'>
            <Link to={`/book/${book.videoId}`}>
              <img src={book.img} alt={book.title}/>
            </Link>
          </div>
        </div>
      ))}
      </div>
    </section>
  )
}

export default Book