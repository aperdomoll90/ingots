import './styles.css'

function CircularNav({color}) {
  return (
    <div className='NavContainer'>
      <div className='mainLogo' style={{color: `var(${color})`}} >
        <span style={{ outlineColor: `var(${color})`}} >css</span>ingots
      </div>
    </div>
  )
}

export default CircularNav
