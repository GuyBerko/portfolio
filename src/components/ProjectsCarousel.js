import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from 'reactstrap';
import github from '../assets/img/github-icon.png';
import website from '../assets/img/website-icon.png';

const projects = [
  {
    name: 'XTickets',
    description: 'XTicket is an application designed for buying and selling tickets. The application was built in a microservices design pattern. The backend was written with Node.js and typescript and the client was written with React server side rendering.',
    image: 'https://storage.googleapis.com/portfolio-309012/xtickets-desktop2.PNG',
    links: {
      site: 'http://xtickets.guy-berkovich.com',
      github: 'https://github.com/GuyBerko/xtickets'
    }
  },
  {
    name: 'Yazame',
    description: 'Real estate calulator, designed for calculating the revenue and expenses for tma 38 projects. The application was built with php and js vanilla + JQuery.',
    image: 'https://storage.googleapis.com/portfolio-309012/yazame-desktop.PNG',
    links: {
      site: 'https://yazame.co.il'
    }
  },
  {
    name: 'Guiderr',
    description: 'Real time chat application designed for tourists to be able to interact with tour guides. The application was built with node.js and React including a cms system and server side rendering.',
    image: 'https://storage.googleapis.com/portfolio-309012/guidder.PNG',
    links: {
      site: 'https://www.guiderr.co/'
    }
  },
  {
    name: 'Portfolio site',
    description: 'React application intended for presenting my resume and portfolio built with create react app.',
    image: 'https://storage.googleapis.com/portfolio-309012/portfolio.PNG',
    links: {
      site: 'https://guy-berkovich.com',
      github: 'https://github.com/GuyBerko/portfolio'
    }
  }
];

const ProjectsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === projects.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  return (
    <Carousel
      activeIndex={ activeIndex }
      next={ next }
      previous={ previous }
      className="carousel"
      interval={ false }
    >
      {
        projects.map((item, index) => (
          <CarouselItem
            onExiting={ () => setAnimating(true) }
            onExited={ () => setAnimating(false) }
            key={ item.image }
          >
            <div className="carousel-item-wrapper">
              <h2>{ item.name }</h2>
              <img className="carousel-item-image" src={ item.image } alt={ item.name } />
              <div className="carousel-item-description">
                <p>{ item.description }</p>
                <div className='links-wrapper'>
                  <a href={ item.links.site } rel="noopener noreferrer" target='_blank'><img className='project-link' src={ website } alt='Website project link' /></a>
                  { item.links.github && <a href={ item.links.github } rel="noopener noreferrer" target='_blank'><img className='project-link' src={ github } alt='Github project link' /></a> }
                </div>
              </div>
            </div>
          </CarouselItem>
        ))
      }
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={ previous } />
      <CarouselControl direction="next" directionText="Next" onClickHandler={ next } />
    </Carousel>
  )
};

export default ProjectsCarousel;
