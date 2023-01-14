// import { ArrowRightIcon } from "@heroicons/react/solid";
import React,{ Component } from "react";
import '../App.css';
import { useState, useRef, useEffect } from "react";
import anime from 'animejs';

export default class App extends Component {
    animation(){
      anime({
        targets: ["#top5","#botleft4","#botright4","#botright5"],
        opacity: 0,
        borderRadius: '8px',
        duration: 1000,
        easing: 'easeInOutSine'  
      });
      anime({
        targets: ["#tophex","#botlefthex","#botrighthex","#stemleft","#stemright"],
        rotateZ: -30,
        borderRadius: '8px',
        duration: 2000,
        easing: 'easeInOutSine'
      })
     }
  componentDidMount(){
       this.animation()
     }
    render() {
      return (
        <div class="loader-container">
            <svg id="svg" width="1512" height="982" viewBox="0 0 1512 982" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="logo">
                <g id="tophex">
                    <line id="top1" x1="763" y1="78.7321" x2="580.836" y2="183.904" stroke="#97FF9B" stroke-width="4"/>
                    <line id="top4" x1="945.164" y1="392.146" x2="763" y2="497.318" stroke="#97FF9B" stroke-width="4"/>
                    <line id="top2" x1="579.103" y1="392.517" x2="579.103" y2="182.172" stroke="#97FF9B" stroke-width="4"/>
                    <line id="top5" x1="943" y1="392.517" x2="943" y2="182.172" stroke="#97FF9B" stroke-width="4"/>
                    <line id="top6" x1="763" y1="77.3714" x2="945.164" y2="182.544" stroke="#97FF9B" stroke-width="4"/>
                    <line id="top3" x1="580" y1="390.785" x2="762.164" y2="495.958" stroke="#97FF9B" stroke-width="4"/>
                </g>
                <g id="botlefthex">
                    <line id="botleft1" x1="582" y1="393.923" x2="399.836" y2="499.096" stroke="#97FF9B" stroke-width="4"/>
                    <line id="botleft4" x1="764.164" y1="707.337" x2="582" y2="812.509" stroke="#97FF9B" stroke-width="4"/>
                    <line id="botleft2" x1="398.103" y1="707.708" x2="398.103" y2="497.363" stroke="#97FF9B" stroke-width="4"/>
                    <line id="botleft5" x1="762" y1="707.708" x2="762" y2="497.363" stroke="#97FF9B" stroke-width="4"/>
                    <line id="botleft6" x1="582" y1="392.562" x2="764.164" y2="497.735" stroke="#97FF9B" stroke-width="4"/>
                    <line id="botleft3" x1="399" y1="705.976" x2="581.164" y2="811.149" stroke="#97FF9B" stroke-width="4"/>
                </g>
                <g id="botrighthex">
                    <line id="botright1" x1="944" y1="393.732" x2="761.836" y2="498.904" stroke="#97FF9B" stroke-width="4"/>
                    <line id="botright4" x1="1126.16" y1="707.146" x2="944" y2="812.318" stroke="#97FF9B" stroke-width="4"/>
                    <line id="botright2" x1="760.103" y1="707.517" x2="760.103" y2="497.172" stroke="#97FF9B" stroke-width="4"/>
                    <line id="botright5" x1="1124" y1="707.517" x2="1124" y2="497.172" stroke="#97FF9B" stroke-width="4"/>
                    <line id="botright6" x1="944" y1="392.371" x2="1126.16" y2="497.544" stroke="#97FF9B" stroke-width="4"/>
                    <line id="botright3" x1="761" y1="705.785" x2="943.164" y2="810.958" stroke="#97FF9B" stroke-width="4"/>
                </g>
                <line id="stemleft" x1="765.178" y1="833.977" x2="691.629" y2="876.44" stroke="#97FF9B" stroke-width="5"/>
                <line id="stemright" x1="761.25" y1="834.835" x2="834.799" y2="877.298" stroke="#97FF9B" stroke-width="5"/>
                </g>
            </svg>
        </div>
      )
    }
}