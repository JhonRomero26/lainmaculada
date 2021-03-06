import React from 'react'
import classnames from 'classnames'

export default function Button({children, className, ...props}) {
  const classes = classnames(
    'btn',
    className
  )
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
