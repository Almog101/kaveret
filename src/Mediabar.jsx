import YouTube from 'react-youtube';
import { useState } from 'react';
//import './css/Mediabar.css';

import { makeStyles } from "@material-ui/styles";
import {  IconButton, Button, Slider, Grid } from '@material-ui/core';
import {PlayCircleFilledWhite, VolumeUp, SkipPrevious, SkipNext } from '@material-ui/icons';

import VolumeSlider from './VolumeSlider.jsx'

const useStyles = makeStyles({
  menubar: {
    "background-color": "#181818",
    height: "20vh",
    padding: "0",
  },
  iframe: {
    display: "none"
    /*visibility: "hidden",
    position: "absolute", 
    width: "0",
    height: "0",
    border: "0",
    border: "none",
    "z-index": "-5"*/
  }
});

function Menubar() {
  const [iframe, updateIframe] = useState(0);
  const classes = useStyles();

  // https://developers.google.com/youtube/player_parameters
  const opts = {
    height: '400',
    width: '400',
    playerVars: {
      autoplay: 0,
    },
  };

  function _onReady(event) {
    console.log(event)
    updateIframe(event.target)
  }

  let isPaused = false;
  function playVideo() {
    if (isPaused) {
      iframe.playVideo()
    }
    else {
      iframe.pauseVideo();
    }
    isPaused = !isPaused;
  }
  
  return (
    <Grid container className={classes.menubar}>
      <Grid item xs={12}>
        <div className={classes.iframe}>
          <YouTube  videoId="hMtZfW2z9dw" opts={opts} onReady={_onReady}/>
        </div>
      </Grid>

      <Grid item xs={4}>
        <h1>Song</h1>
        <p>Artist</p>
      </Grid>

      <Grid item xs={4}>
          <IconButton style={{padding:"1vh"}} onClick={playVideo}>
            <PlayCircleFilledWhite style={{fontSize: "6vh"}}/>
          </IconButton>
      </Grid>
    
      <Grid item xs={4}>
        <VolumeSlider/>
      </Grid>


    </Grid>
  );

}

export default Menubar;
