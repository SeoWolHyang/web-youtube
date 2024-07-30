import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import { musicText } from '../data/music';
import { Link } from 'react-router-dom';

const Music = () => {
  
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    },200);
  },[]);

  const videoClass = loading ? 'isLoading' : 'isLoaded';
  
  return (
    <Main title="음악 채널" 
          description="음악 추천 페이지입니다.">
      <section id='music' className={videoClass}>
        <h2>🎧추천 음악을 소개합니다.</h2>
        <div className='music__inner'>
        {musicText.map((music, key)=>(
          <div className='music' key={key}>
            <div className='music__img play__icon'>
              <Link to={`/channel/${music.channelId}`}>
                <img src={music.img} alt={music.name}/>
              </Link>
            </div>
            <div className='music__info'>
              <Link to={`/channel/${music.channelId}`}>
                {music.name}
              </Link>
            </div>
          </div>
        ))}
        </div>
    </section>
    </Main>
  )
}

export default Music