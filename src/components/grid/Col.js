import React from 'react'

function classNameForWidth(width) {
  if (!width) {
    return 'col'
  }
  else {
    // e.g. col-6
    return `col-${width}`
  }
}

function classNameForSize(size, width) {
  if (!width) {
    return ''
  }
  else if (width === true) {
    return `col-${size}`
  }
  else {
    // e.g. col-sm-6
    return `col-${size}-${width}`
  }
}

const Col = ({
  children,
  width,
  sm,
  md,
  lg,
  xl
}) => (
  <div className={[
    classNameForWidth(width),
    classNameForSize('sm', sm),
    classNameForSize('md', md),
    classNameForSize('lg', lg),
    classNameForSize('xl', xl)
  ].join(' ')}>
    { children }
  </div>
)

export default Col
