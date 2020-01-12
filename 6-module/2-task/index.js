'use strict';

class Carousel {
  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: './assets/images/default-slide-img.jpg'
    }
  ];

  constructor(element) {
    this.el = element;
    let main = document.createElement('div');
    main.setAttribute('id', 'mainCarousel');
    main.classList.add('main-carousel');
    main.classList.add('carousel');
    main.classList.add('slide');
    this.el.appendChild(main);
    let indicators = document.createElement('ol');
    indicators.classList.add('carousel-indicators');
    let indicatorOne = document.createElement('li');
    let indicatorTwo = document.createElement('li');
    let indicatorThree = document.createElement('li');
    indicatorOne.classList.add('carousel-indicator');
    indicatorTwo.classList.add('carousel-indicator');
    indicatorThree.classList.add('carousel-indicator');
    indicatorOne.setAttribute('data-target', '#mainCarousel');
    indicatorOne.setAttribute('data-slide-to', '0');
    indicatorTwo.setAttribute('data-target', '#mainCarousel');
    indicatorTwo.setAttribute('data-slide-to', '1');
    indicatorThree.setAttribute('data-target', '#mainCarousel');
    indicatorThree.setAttribute('data-slide-to', '2');
    indicators.appendChild(indicatorOne);
    indicators.appendChild(indicatorTwo);
    indicators.appendChild(indicatorThree);
    main.appendChild(indicators);
    let inner = document.createElement('div');
    inner.classList.add('carousel-inner');
    let activeSlide = this.slide(0);
    inner.appendChild(activeSlide);
    main.appendChild(inner);
    let buttonLeft = document.createElement('button');
    buttonLeft.classList.add('carousel-control-prev');
    buttonLeft.setAttribute('href', '#mainCarousel');
    buttonLeft.setAttribute('role', 'button');
    buttonLeft.setAttribute('data-slide', 'prev');
    let prev = document.createElement('span');
    prev.classList.add('carousel-control-prev-icon');
    prev.setAttribute('aria-hidde', 'true');
    let previous = document.createElement('span');
    previous.classList.add('sr-only');
    previous.innerHTML = 'Previous';
    buttonLeft.appendChild(prev);
    buttonLeft.appendChild(previous);
    let buttonRight = document.createElement('button');
    buttonRight.classList.add('carousel-control-next');
    buttonRight.setAttribute('href', '#mainCarousel');
    buttonRight.setAttribute('role', 'button');
    buttonRight.setAttribute('data-slide', 'next');
    let nxt = document.createElement('span');
    nxt.classList.add('carousel-control-next-icon');
    nxt.setAttribute('aria-hidde', 'true');
    let next = document.createElement('span');
    next.classList.add('sr-only');
    next.innerHTML = 'Next';
    buttonRight.appendChild(nxt);
    buttonRight.appendChild(next);
    main.appendChild(buttonLeft);
    main.appendChild(buttonRight);
    buttonLeft.onclick = this.toLeft.bind(this);
    buttonRight.onclick = this.toRight.bind(this);
    indicators.onclick = this.forIndicators.bind(this);
  }

  getId() {
    let currentId;
    let innerTitle = this.el.getElementsByClassName('h1');
    this.slides.forEach(function(elem) {
      if (innerTitle[0].innerHTML == elem.title) {
        currentId = elem.id;
      }
    });
    return currentId;
  }

  createSlide(index) {
    let oldActive = this.el.getElementsByClassName('carousel-item');
    oldActive[0].remove();
    let allIndicators = this.el.getElementsByClassName('carousel-indicator');
    for (let elem of allIndicators) {
      elem.classList.remove('active');
    }
    let newActive = this.slide(index);
    let container = this.el.getElementsByClassName('carousel-inner');
    container[0].appendChild(newActive);
  }

  toLeft() {
    let index = this.getId();
    if (index == 0) {
      index = this.slides.length - 1;
    }
    else if (index > 0) {
      index -= 1;
    }
    this.createSlide(index);
  }

  toRight() {
    let index = this.getId();
    if (index == this.slides.length - 1) {
      index = 0;
    }
    else if (index < this.slides.length - 1) {
      index += 1;
    }
    this.createSlide(index);
  }

  slide(id) {
    let activeSlide = document.createElement('div');
    activeSlide.classList.add('carousel-item');
    activeSlide.classList.add('active');
    let pic = document.createElement('img');
    pic.setAttribute('src', this.slides[id].img);
    pic.setAttribute('alt', 'Activelide');
    activeSlide.appendChild(pic);
    let activeContainer = document.createElement('div');
    activeContainer.classList.add('container');
    let carouselCaption = document.createElement('div');
    carouselCaption.classList.add('carousel-caption');
    let slideTitle = document.createElement('h3');
    slideTitle.classList.add('h1');
    slideTitle.innerHTML = this.slides[id].title;
    let picButton = document.createElement('div');
    let picLinkButton = document.createElement('a');
    picLinkButton.classList.add('btn');
    picLinkButton.setAttribute('href', '#');
    picLinkButton.setAttribute('role', 'button');
    picLinkButton.innerHTML = 'View all DEALS';
    let dealsPic = document.createElement('img');
    dealsPic.classList.add('ml-3');
    dealsPic.setAttribute('alt', ' ');
    dealsPic.setAttribute('src', 'assets/icons/icon-angle-white.svg');
    picLinkButton.appendChild(dealsPic);
    picButton.appendChild(picLinkButton);
    carouselCaption.appendChild(slideTitle);
    carouselCaption.appendChild(picButton);
    activeContainer.appendChild(carouselCaption);
    activeSlide.appendChild(activeContainer);
    let activeIndicator = this.el.querySelector(`*[data-slide-to="${id}"]`);
    activeIndicator.classList.add('active');
    return (activeSlide);
  }

  forIndicators() {
    if (!event.target.hasAttribute('data-target')) {
      return;
    }
    let id = event.target.getAttribute('data-slide-to');
    this.createSlide(id);
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;
