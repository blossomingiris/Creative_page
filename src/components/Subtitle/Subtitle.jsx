import './Subtitle.scss'

function Subtitle({ number, desc, title, className }) {
  return (
    <div className={className}>
      <div className='number'>{number}</div>
      <div className='subtitle__content'>
        <div className='commissioner--extra-bold-s2-white'>{title}</div>
        <p className='commissioner--regular-s1-white brand-strategy-is'>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default Subtitle
