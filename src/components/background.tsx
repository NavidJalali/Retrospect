import React from 'react'
import styled from 'styled-components'

const BG = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: linear-gradient(
    111.34deg,
    #71f6ff 0%,
    #caacff 51.04%,
    #ff7098 100%
  );
  z-index: -999;
`

const EllipseOne = styled.div`
  position: absolute;
  width: 250vw;
  left: -75vw;
  top: -35vh;
  height: 100vh;
  border-radius: 50%;
  background: white;
  opacity: 0.15;
  z-index: -998;
`

const EllipseTwo = styled.div`
  position: absolute;
  width: 250vw;
  left: -75vw;
  top: -40vh;
  height: 100vh;
  border-radius: 50%;
  background: white;
  opacity: 0.15;
  z-index: -997;
`

const Background = () => {
  return (
    <>
      <BG />
      <EllipseOne />
      <EllipseTwo />
    </>
  )
}

export default Background
