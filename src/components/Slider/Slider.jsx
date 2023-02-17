import { useState, useEffect } from 'react'

import bg_pattern_wavy_white from '../../assets/desktop/bg-pattern-wavy-white.svg'

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'

import './Slider.scss'

function Slider() {
  //slider
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    {
      id: 1,
      title: 'Brand naming & guidelines',
      path: 'image-slide-1.jpg',
      projectName: 'Brand naming & guidelines',
      projectYear: '2019',
    },
    {
      id: 2,
      title: 'Brand identity & merchandise',
      path: 'image-slide-2.jpg',
      projectName: 'New Majestic Hotel',
      projectYear: '2018',
    },
    {
      id: 3,
      title: 'Brand identity & web design',
      path: 'image-slide-3.jpg',
      projectName: 'Crypto Dashboard',
      projectYear: '2016',
    },
  ]

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  //to use arrows left/right in keyboard
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious()
      } else if (event.key === 'ArrowRight') {
        goToNext()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  {
    return (
      <div className='flex-container-row'>
        <div className='rectangle-black--2'></div>
        <div>
          <div className='slide'>
            <h2 className='brand-naming-guide commissioner--extra-bold-md-white'>
              {slides[currentIndex].title}
            </h2>
            <div className='slide__icons-group'>
              <button className='icon_arrow' onClick={goToPrevious}>
                <MdOutlineKeyboardArrowLeft />
              </button>
              <button className='icon_arrow' onClick={goToNext}>
                <MdOutlineKeyboardArrowRight />
              </button>
            </div>
          </div>
          <div className='slide__image'>
            <img
              src={require(`../../assets/desktop/${slides[currentIndex].path}`)}
              alt={slides[currentIndex].title}
            />
          </div>
          <img
            className='image__wave--white'
            src={bg_pattern_wavy_white}
            alt='white wave'
          ></img>
          <div className='slide__description'>
            <h3 className='learn-product-roadmap commissioner--extra-bold-s2-white'>
              {slides[currentIndex].projectName}
            </h3>
            <p className='commissioner--regular-s1-white'>
              {slides[currentIndex].projectYear}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Slider
