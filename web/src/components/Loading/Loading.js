import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const Loading = () => (
  <LoadingWrapper>
    <FontAwesomeIcon icon={['fas', 'spinner']} size="lg" spin />
  </LoadingWrapper>
)

export default Loading
