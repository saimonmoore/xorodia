import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import ThemeWrapper from 'src/components/ThemeWrapper'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <ThemeWrapper>
      <RedwoodProvider>
        <Routes />
      </RedwoodProvider>
    </ThemeWrapper>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
