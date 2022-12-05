import React from 'react';
// import luiz from '../assets/luiz.PNG';
import luiz from '../assets/PNG image.PNG';
import '../style/Home.css'

export default function Home() {
  return (
    <div className="main">
      <section class ="my-name">
        <h3>Hey, my name is</h3>
        <h2 class="change-color">Luiz Borges</h2>
        <h3>I am on my way to become</h3>
        <h2 class="change-color">a Web Developer</h2>

      </section>

      <section class="picture-main">
        <img src={luiz} alt="test"/>           
      </section>
    
    </div>
  );
}
