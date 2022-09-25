import './styles.css'
const videoBackground = require('../../oceanMedia/boatDonutClipped.mp4')



function OceanHero() {

  return (
    <section id='oceanHero'>
      <video loop autoPlay muted className='videoBackground'  src={videoBackground} />
      <div class='sPathSvg'/>
      <h3 className='whiteIndicator '>SCROLL</h3>
    </section>
  )
}

export default OceanHero
