import React from 'react'
import PropTypes from 'prop-types'
import { StylesProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { baseTheme } from './theme'
import { GlobalStyles } from './GlobalStyles'

const ThemeWrapper = ({ children }) => {
  library.add(fas)

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={baseTheme}>
        <>
          <GlobalStyles />
          {children}
        </>
      </ThemeProvider>
    </StylesProvider>
  )
}

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeWrapper
