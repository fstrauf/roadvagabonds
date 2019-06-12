import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
// import { reset, headroom } from 'styles'
// import { SEO, Navigation } from 'components'
// import { SkipNavLink } from 'elements'
import 'typeface-montserrat'
import 'typeface-istok-web'
import theme from '../../config/theme'
// import locales from '../../config/i18n'

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
