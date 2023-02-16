import image_strategic from '../../assets/desktop/image-strategic.jpg'
import bg_pattern_wave_red from '../../assets/desktop/bg-pattern-wave-red.svg'

import './MainContent.scss'

function MainContent() {
  return (
    <main className='content__container'>
      <section className='block-1'>
        <div className='block-1__image'>
          <img src={image_strategic} alt='strategic' />
        </div>
        <div className='block-1__content'>
          <div className='block-1__content--overlay'>
            <div className='block-1__image--red-wave'>
              <img src={bg_pattern_wave_red} alt='red wave' />
            </div>
            <div>
              <div className='block-1__content--text-wrapper'>
                <h2 className='commissioner--extra-bold-md-white'>
                  <span className='accent-color'>Design</span> is strategic.
                </h2>
                <p className='commissioner--regular-s1-white'>
                  “A well-crafted design strategy consistently produces desired
                  outcomes and brand awareness. We are firm believers that
                  success lies in creative collaboration with our clients.”
                </p>
                <button>Schedule a Call</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='block-2'>
        <div className='block-2__title'>
          <h2 className='commissioner--extra-bold-md-black'>
            Our approach for creating a winning brand
          </h2>
        </div>
        <div className='block-2--bg-red'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </main>
  )
}

export default MainContent

{
  /* <div className='image--main'>
        <img src={image_strategic} alt='strategic' />
      </div>
      <div className='content'>
        <div className='content__image--red-wave'>
          <img src={bg_pattern_wave_red} alt='red wave' />
        </div>
        <div className='content__block'>

        </div>
      </div> */
}
