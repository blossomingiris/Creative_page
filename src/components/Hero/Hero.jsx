import './Hero.scss'

function Hero() {
  return (
    <section className='flex-container-row'>
      <div className='hero__image'></div>
      <div className='hero__wrapper'>
        <h1 className='commissioner--extra-bold-lg-black'>
          Branding <br />& website design agency
        </h1>
        <p className='commissioner--regular-s1-black we-specialize-in-vis'>
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small businesses, giving lasting
          impressions to audiences in a digital world.
        </p>
        <button className='hero__button commissioner--extra-bold-s1-white'>
          Learn More
        </button>
      </div>
    </section>
  )
}

export default Hero
