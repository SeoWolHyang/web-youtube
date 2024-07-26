import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = lazy (()=> import('./pages/Home'));
const Today = lazy (()=> import('./pages/Today'));
const Music = lazy (()=> import('./pages/Music'));
const Webd = lazy (()=> import('./pages/Webd'));
const Website = lazy (()=> import('./pages/Website'));
const Gsap = lazy (()=> import('./pages/Gsap'));
const Port = lazy (()=> import('./pages/Port'));
const Youtube = lazy (()=> import('./pages/Youtube'));
const Channel = lazy (()=> import('./pages/Channel'));
const Video = lazy (()=> import('./pages/Video'));
const Search = lazy (()=> import('./pages/Search'));
const Not = lazy (()=> import('./pages/Not'));
const Main = lazy (()=> import('./components/section/Main.jsx'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main/>}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/today' element={<Today/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/webd' element={<Webd/>}/>
          <Route path='/website' element={<Website/>}/>
          <Route path='/gsap' element={<Gsap/>}/>
          <Route path='/port' element={<Port/>}/>
          <Route path='/youtube' element={<Youtube/>}/>
          <Route path='/channel/:channelID' element={<Channel/>}/>
          <Route path='/video/:videoID' element={<Video/>}/>
          <Route path='/search/:searchID' element={<Search/>}/>
          <Route path='/*' element={<Not/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App