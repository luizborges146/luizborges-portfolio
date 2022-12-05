import React from 'react';
import luizMirror from '../assets/luizborges-mirror.jpeg';
import '../style/About.css'


export default function About() {
  return (
    <section className="about-me" id="about-me">
      <div className="title-am">
        <h1>About me</h1>
      </div>

      <div className="body-am">
        <img src={luizMirror} alt="luiz looking at the mirror"/>
        <div className="about-descr">
          <h3>Technical Support Engineer & future Web Developer</h3>
          <p>An enthusiastic people-focussed Technical Support Engineer having spent 3 years progressing in SaaS technical support, DevOps and platform management to build and develop understanding of commercial objectives, customer-centric service solutions and business acumen. Looking to thrive in environments of personal and professional growth, with a strong interest in Technical Support, DevOps and/or Software Engineering.</p>
        </div>
      </div>

    </section>
  );
}
