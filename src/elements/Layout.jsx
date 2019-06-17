import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { StaticQuery } from 'gatsby'
import 'typeface-montserrat'
import 'typeface-istok-web'
import theme from '../../config/theme'

const { Provider: LocaleProvider, Consumer: LocaleConsumer } = React.createContext()

const Layout = ({ children, locale, pathname, customSEO }) => (
  <StaticQuery

    render={data => {
      
      // Convert the incoming "de-de" to "de_de"
      const underscored = locale.replace(/-/g, '_')

      const prismicLocale = data[underscored].data
      

      return (

          <ThemeProvider theme={theme}>
            <>

              {/* <SkipNavLink /> */}
              {children}
            </>
          </ThemeProvider>
      )
    }}
  />
)

export default Layout

export { LocaleConsumer }

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  locale: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  customSEO: PropTypes.bool,
}

Layout.defaultProps = {
  customSEO: false,
}
