import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import VideoSearch from '../components/video/VideoSearch';
import { useParams } from 'react-router-dom';

const Search = () => {

  const {searchId} = useParams();
  const [video, setVideo] = useState([]);

  useEffect(()=>{
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
    .then(response => response.json())
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))
  },[searchId]);

  return (
    <Main title="유튜브 검색" description="검색 페이지입니다.">
      <section id='searchPage'>
        <div className='video__inner search'>
          <VideoSearch/>
        </div>
      </section>
    </Main>
  )
}

export default Search