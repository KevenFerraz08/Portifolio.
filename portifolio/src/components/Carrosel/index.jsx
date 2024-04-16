import React, { useState, useEffect } from 'react';

const imagens = [
  {
    id: 0,
    img: "../assets/img/Slide-principal.png",
  },
  {
    id: 1,
    nome: "Combo Gaming",
    img: "img/PUZZLE.png",
  }

];

const SlideShow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  function currentSlide(n) {
    showSlides(n);
  }

  function showSlides(n) {
    let newIndex = n;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (newIndex > slides.length) { newIndex = 1; }
    if (newIndex < 1) { newIndex = slides.length; }
    setSlideIndex(newIndex);
  }

  return (
    <div className="container-slide">
      <div className="slideshow-container">
        {imagens.map((val) => (
          <div key={val.id} className="mySlides fade">
            <center><img src={val.img} alt={val.nome} style={{ width: '100%' }} /></center>
          </div>
        ))}
        {/* Next and previous buttons */}
        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
      </div>
      <br />
      {/* The dots/circles */}
      <div style={{ textAlign: 'center' }}>
        {imagens.map((_, index) => (
          <span key={index} className={`dot ${slideIndex === index + 1 ? 'active' : ''}`} onClick={() => currentSlide(index + 1)}></span>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
