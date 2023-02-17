import bg_pattern_wave_red from '../../assets/desktop/bg-pattern-wave-red.svg'

import './MainContent.scss'
import Subtitle from '../Subtitle/Subtitle'
import Slider from '../Slider/Slider'

function MainContent() {
  const subtitles = [
    {
      id: 1,
      number: '01',
      title: 'Brand Strategy',
      desc: 'Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key',
      className: 'subtitle',
    },
    {
      id: 2,
      number: '02',
      title: 'Brand Design',
      desc: 'Keeping the brand design unique and meaningful helps in communicating the brand’s timeless value effectively.',
      className: 'subtitle copy',
    },
    {
      id: 3,
      number: '03',
      title: 'Web Design',
      desc: 'A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues.',
      className: 'subtitle copy-2',
    },
  ]

  return (
    <main>
      <div className='flex-container-row'>
        <div className='content__image'></div>
        <div>
          <div className='rectangle--black'></div>
          <div className='group-4 flex-container'>
            <img
              src={bg_pattern_wave_red}
              alt='red wave'
              className='image__wave--red'
            />
            <div className='content commissioner--extra-bold-md-white'>
              <h2 className='design-is-strategic'>
                <div className='flex-container-column'>
                  <span className='accent-color--red'>Design</span>
                  <span>is strategic</span>
                </div>
              </h2>
              <p className='commissioner--regular-s1-white'>
                “A well-crafted design strategy consistently produces desired
                outcomes and brand awareness. We are firm believers that success
                lies in creative collaboration with our clients.”
              </p>
              <button className='button-1'>
                <div className='schedule-a-call'>Schedule a Call</div>
                <div className='line'></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className='our_aproach_for commissioner--extra-bold-md-black'>
        Our approach for creating a winning brand
      </p>
      <div className='rectangle--red'></div>
      {subtitles.map((subtitle) => (
        <Subtitle key={subtitle.id} {...subtitle} />
      ))}
      <Slider />
      <div className='contacts'>
        <img
          src={bg_pattern_wave_red}
          alt='red wave'
          className='image__wave--red-2'
        />
        <h2 className='lets__build_something commissioner--extra-bold-md-black'>
          Let's build something great together.
        </h2>
        <button className='button-2 commissioner--extra-bold-xs-white'>
          Schedule a Call
        </button>
      </div>
    </main>
  )
}

export default MainContent
