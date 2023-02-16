import image_hero from '../../assets/desktop/image-hero.jpg'
import './Hero.scss'

function Hero() {
  return (
    <section className='hero'>
      <div className='hero__container-center'>
        <div className='hero__wrapper'>
          <h1 className='commissioner--extra-bold-lg-black'>
            Branding <br />& website design agency
          </h1>
          <p className='commissioner--regular-s1-black we-specialize-in-vis'>
            We specialize in visual storytelling by creating cohesive brand and
            website design solutions for small businesses, giving lasting
            impressions to audiences in a digital world.
          </p>
          <button className='group-3 commissioner--extra-bold-s1-white'>
            Learn More
          </button>
        </div>
        <img
          src={image_hero}
          alt='people work at computers'
          className='bitmap'
        />
      </div>
    </section>
  )
}

export default Hero
