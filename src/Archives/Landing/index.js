import './styles.css'
const anchor = require('./media/anchor.png')
 function Landing() {
  return (
      <div id='landing-wrapper'>
      <div className="landing-menu">
        <div className="landing-card">
          <img src={anchor} alt='anchor' />
          <a href='/fishing'>Fishing</a>
        </div>
       
         </div>
    </div>
  )
}

export default Landing