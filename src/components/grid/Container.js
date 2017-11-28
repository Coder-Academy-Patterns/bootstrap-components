import React from 'react'

// <Container>…</Container>
// => <div class='container'>…</div>

// <Container fluid>…</Container>
// => <div class='container-fluid'>…</div>

const Container = ({
  children,
  fluid = false
}) => (
  <div className={ fluid ? 'container-fluid' : 'container' }>
    { children }
  </div>
)

export default Container
