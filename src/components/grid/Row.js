import React from 'react'

const Row = ({
  children,
  className = '' // undefined or a string
}) => (
  <div className={ `row ${className}` }>
    { children }
  </div>
)

export default Row
