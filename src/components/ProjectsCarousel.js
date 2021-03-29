import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from 'reactstrap';
import github from '../assets/img/github-icon.png';
import website from '../assets/img/website-icon.png';

const projects = [
  {
    name: 'Yazame',
    description: 'Real estate calulator, designated for calcualte the Revenue and expenses for tma 38 projects. The application was built with php and js vanilla + JQuery.',
    image: 'https://storage.googleapis.com/portfolio-309012/yazame-desktop.PNG',
    links: {
      site: 'https://yazame.co.il'
    }
  },
  {
    name: 'Luckyy',
    description: 'Real time chat application designated for tourists to be able to interact with tour guides. The application was built with node.js and React including an cms system and server side rendering.',
    image: 'https://storage.googleapis.com/portfolio-309012/luckyy-chat.PNG',
    links: {
      site: 'http://tipozz.herokuapp.com/'
    }
  },
  {
    name: 'XTickets',
    description: 'Node.js and react server side rendering application using a microservices design pattern. The application designated for buying and selling tickets. ',
    image: 'https://www.jimdo.com/static/6ddd0047c5c518accffa2abb6db438c9/80ee9/hero_visual_en.webp',
    links: {
      site: 'https://guy-berkovich.com',
      github: 'https://github.com/GuyBerko/xtickets'
    }
  },
  {
    name: 'Portfolio site',
    description: 'React application that intended for presenting my resume and portfolio.',
    image: 'https://storage.googleapis.com/portfolio-309012/portfolio.PNG',
    links: {
      site: 'https://guy-berkovich.com',
      github: 'https://github.com/GuyBerko/portfolio'
    }
  }
];

const ProjectsCarousel = props => {
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
            <div class="carousel-item-wrapper">
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

ProjectsCarousel.propTypes = {

};

export default ProjectsCarousel;
