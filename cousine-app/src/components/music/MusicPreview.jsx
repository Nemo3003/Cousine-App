import React from 'react'

function MusicPreview() {
  return (
    <div className="container-music">
    <div className="base">
      <div id="art"></div>
      <div id="title">New Song</div>
      <div id="artist">JunesiPhone</div>
      <div id="controls">
        <img id="play" src="http://junesiphone.com/cp/music/img/play.svg"/>
        <img id="next" src="http://junesiphone.com/cp/music/img/next.svg" width="25"/>
        <img id="prev" src="http://junesiphone.com/cp/music/img/prev.svg" width="25"/>
      </div>
    </div>
  </div>
  )
}

export default MusicPreview