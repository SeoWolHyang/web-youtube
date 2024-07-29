import React from 'react'
import { Link } from 'react-router-dom'
import { AnimeText } from '../../data/Animation'

const Anime = () => {
  return (
    <section id='anime'>
      <h2>📺추천 애니메이션을 소개합니다.</h2>
      <div className='video__inner'>
        {AnimeText.map((anime, key)=>(
          <div className='video' key={key}>
            <div className='video__thumb play__icon'>
              <Link to={`/video/${anime.videoId}`}>
                <img src={anime.img} alt={anime.title}/>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Anime