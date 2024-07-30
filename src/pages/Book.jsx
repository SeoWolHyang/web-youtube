import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import VideoCard from '../components/video/VideoCard';
import { BookText } from '../data/Book';

const Book = () => {

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    },200);
  },[]);

  const videoClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main title="도서 추천 페이지" 
          description="도서 추천 페이지입니다.">
      <section id='bookPage' className={videoClass}>
        <h2>📕추천 도서를 소개합니다</h2>
        <div className='video__inner'>
          <VideoCard videos={BookText}/>
        </div>
      </section>
    </Main>
  )
}

export default Book