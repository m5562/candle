import React from 'react'
import Button from './elements/Button'
import Icon from './elements/Icon'
function App() {
  const wallStyle = {
    display: 'grid',
    gridTemplateAreas: ""
  }
  return (
    <div className='wall' style={wallStyle}>
      <Button size={"sm"} varient={"filled"} shape={"brick"} leadigIcon={<Icon ico={"info"} />}>Hello</Button>
    </div>
  )
}

export default App