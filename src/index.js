import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'routes'
import Topbar from 'components/topBar'
import { CurrentUserProvider } from 'contexts/currentUser'
import CurrentUserChecker from 'components/currentUserChecker'

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <Topbar />
          <Routes />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  )
}

// {/* <React.StrictMode> */}
ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
)
