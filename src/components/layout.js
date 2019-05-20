import React from "react"
import { Link, StaticQuery } from "gatsby"

import Header from '../components/header'
import PropTypes from "prop-types"


const Layout = ({ children }) => (
  <StaticQuery
    query={siteTitleQuery}
    render={data => (        
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            background: '#123445'
          }}
        >
        <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} />
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const siteTitleQuery = graphql`
  query SiteTitleQuery {
    site {
            siteMetadata {
              title
              menuLinks {
                name
                link
            }
            }
          }
  }
`

export default Layout

// class Layout extends React.Component {
//   render() {
//     const { location, title, children } = this.props
//     let header

//     header = (
//       <StaticQuery
//         query={siteTitleQuery}
//         <React.Fragment>
//         <Helmet
//           title={'tite'}
//           meta={[
//             { name: 'description', content: 'Sample' },
//             { name: 'keywords', content: 'sample, something' },
//           ]}
//         >
//         </Helmet>
//         <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
//       </React.Fragment>
//         />
//       )

//     return (
//       <div
//         style={{
//           marginLeft: `auto`,
//           marginRight: `auto`,
//           maxWidth: rhythm(50),
//           padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
//           height: '100%',
//           display: 'table',
//           width: '100%',
//           textAlign: 'left',
//           background: '#B1119B'
//         }}
//       >
//         <header>{header}</header>
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     )
//   }
// }



// export default Layout
