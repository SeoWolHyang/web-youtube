import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import VideoCard from '../components/video/VideoCard';
import { movieText } from '../data/Movie';

const Movie = () => {
  
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    },200);
  },[]);

  const videoClass = loading ? 'isLoading' : 'isLoaded';
  
  return (
    <Main title="movie 페이지" 
          description="movie 페이지입니다.">
      <section id='moviePage' className={videoClass}>
        <h2>🎥영화 추천 페이지입니다.</h2>
        <div className='video__inner'>
          <VideoCard videos={movieText}/>
        </div>
      </section>
    </Main>
  )
}

export default Movie