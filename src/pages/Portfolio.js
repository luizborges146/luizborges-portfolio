import React from 'react';
import '../style/Portfolio.css'


export default function Portfolio() {
  return (
    <div className="work" id="work-gall">
        <div className="title">
            <h2>Portfolio</h2>
        </div>

        <div class="box">

            <ul id="port-photos">
                <a href="https://luizborges146.github.io/google-glass/" target="_blank" rel="noopener noreferrer"><li id="pic01"><span>Google Glass</span></li></a>
                <a href="https://luizborges146.github.io/first-homework/" target="_blank" rel="noopener noreferrer"><li id="pic02"><span>Horiseon</span></li></a>
                <a href="https://ajmanzione.github.io/Mini-Project-2/" target="_blank" rel="noopener noreferrer"><li id="pic03"><span> CSS Snippet Cheatsheet</span></li></a>
            </ul>
        </div>
    </div>
  );
}
