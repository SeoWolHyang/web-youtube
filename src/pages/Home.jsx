import React from 'react';
import Main from '../components/section/Main';
import Today from '../components/contents/Today';
import Music from '../components/contents/Music';
import Portfolio from '../components/contents/Portfolio';
import Youtube from '../components/contents/Youtube';
import VideoSlider from '../components/video/VideoSlider';
import { movieText } from '../data/Movie';
import { AnimeText } from '../data/Animation';
import { BookText } from '../data/Book';

const Home = () => {
  return (
    <Main title="유튜브 채널" description="유튜브 채널 페이지입니다.">
      <Today/>
      <Music/>
      <VideoSlider id='movie' title='🎥추천 영화를 소개합니다.' videos={movieText} to='/movie/'/>
      <VideoSlider id='book' title='📕추천 도서를 소개합니다' videos={BookText} to='/book/'/>
      <VideoSlider id='anime' title='📺추천 애니메이션을 소개합니다.' videos={AnimeText} to='/anime/'/>
      <Portfolio/>
      <Youtube/>
    </Main>
  )
}

export default Home