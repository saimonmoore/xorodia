import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import 'typeface-roboto'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import ThemeWrapper from 'src/components/ThemeWrapper'
import { SnackbarProvider } from 'notistack'
import Routes from 'src/Routes'
import './i18n.js'
import { withAuth } from 'src/contexts/authentication'

import './index.css'
import './scaffold.css'

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <ThemeWrapper>
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <RedwoodProvider>{withAuth(<Routes />)}</RedwoodProvider>
      </SnackbarProvider>
    </ThemeWrapper>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
