import React from 'react'

function Button({size, varient, shape, leadigIcon, trailingIcon, children}) {

  const optioins ={
    size: size ?? "medium",
    varient: varient ?? "filled",
    shape: shape ?? "brick",
    leadigIcon: leadigIcon ?? "",
    trailingIcon: leadigIcon ?? ""
  }

  const buttonStyle={
    height: size==="small"?"":"",
    display: 'block',
    alignItems: 'center',
    outline: 'none',
    border: 'none'
    
  }
  return (
    <button style={buttonStyle}>
        {children}
    </button>
  )
}

export default Button


//size = sm, lg, mid
//varient = outlined, filled
//shape = brick, pill
//leadingIcon = icon component
//trailingIcon = icon component
