import React, { useEffect } from 'react';
import './App.css';
import Gauche from './components/Partie/Gauche';
import Droite from './components/Partie/Droite';

function App() {

  useEffect(() => {

    var main = document.querySelector('#main');
    // On écoute l'événement mousemove sur le div
    main.addEventListener('mousemove', function (e) {
      var x = e.clientX;
      var y = e.clientY;
      // On modifie le radial-gradient en fonction de la position de la souris
      main.style.background = 'radial-gradient(400px at ' + x + 'px ' + y + 'px, rgba(44, 53, 178, 0.504), transparent 80%)';
    });

    let verticalButton = document.querySelectorAll("nav.vertical li");
    verticalButton.forEach((target) => {
      target.addEventListener("click", (e) => {
        verticalButton.forEach((target2) => {
          target2.classList.remove("active");
        })
        target.classList.add("active");
        let anchor = target.querySelector("a").href;
        anchor = anchor.split("#").slice(-1)[0]
        let section = document.querySelector("#" + anchor);
        section.classList.add("active");
        setTimeout((e) => {
          section.classList.remove("active");
        }, 2000);
      })
    })

    let sections = document.querySelectorAll("section");
    main.addEventListener("scroll", (e) => {
      let scroll = main.scrollTop
      sections.forEach((target) => {
        let offset = target.offsetTop;
        let height = target.offsetHeight;
        if (scroll >= offset && scroll < offset + height) {
          let id = target.getAttribute("id");
          let button = document.querySelector("nav.vertical li a[href='#" + id + "']");
          verticalButton.forEach((target2) => {
            target2.classList.remove("active");
          })
          button.closest("li").classList.add("active")
        }
      })
    })
  }, [])

  let isEnglish = window.location.href.includes("/en");
  let inspirepar = !isEnglish? "Portfolio inspiré par" : "Portfolio inspired by";

  return (
    <div id="main">
      <Gauche />
      <Droite />
      <footer>
        <p>
          Nicolas Goyon - 2023
          <br />
          {inspirepar} <a href="https://brittanychiang.com/">Brittany Chiang</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
