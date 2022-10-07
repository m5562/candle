import React from 'react'

function Icon({ico, color}) {
    const style =  {
        color: color ?? '#111'
    }
  return (
    <span className='material-icons-round' style={style}>{ico}</span>
  )
}

export default Icon