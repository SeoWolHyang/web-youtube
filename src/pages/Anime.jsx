import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import VideoCard from '../components/video/VideoCard';
import { AnimeText } from '../data/Animation';

const Anime = () => {

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    },200);
  },[]);

  const videoClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main title="애니 페이지" 
          description="애니 추천 페이지입니다.">
      <section id='animePage' className={videoClass}>
        <h2>📺추천 애니메이션을 소개합니다.</h2>
        <div className='video__inner'>
          <VideoCard videos={AnimeText}/>
        </div>
      </section>
    </Main>
  )
}

export default Anime