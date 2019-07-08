import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

const Head = props => {
  const { postNode, article, data } = props
  const { buildTime, config } = data.site
  const homeURL = config.siteUrl
  const URL = config.siteUrl
  const isBlog = URL === `${homeURL}/blog`

  let title
  let siteDescription
  let image
  let imageWidth
  let imageHeight

  if (article) {
    const postImage = postNode.frontmatter.image.childImageSharp.fluid

    title = postNode.frontmatter.title
    siteDescription = `${postNode.frontmatter.excerpt}...`
    image = `${config.siteUrl}${postImage.src}`
    imageWidth = postImage.width
    imageHeight = postImage.height
  } else {
    title = config.title
    siteDescription = config.siteDescription
    image = config.siteBanner
    imageWidth = config.siteBannerWidth
    imageHeight = config.siteBannerHeight
  }

  const orgaCreator = input => ({
    '@context': 'http://schema.org',
    '@id': `${config.siteUrl}/#${input}`,
    '@type': 'Organization',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EN',
      addressLocality: '',
      postalCode: '',
    },
    name: title,
    alternateName: config.siteTitleAlt,
    description: siteDescription,
    url: homeURL,
    email: 'roadvagabonds@gmail.com',
    founder: 'Road Vagabonds',
    foundingDate: '2019-06-15',
    foundingLocation: 'Australia',
    image: {
      '@type': 'ImageObject',
      url: config.siteLogo,
      height: '512',
      width: '512',
    },
    logo: {
      '@type': 'ImageObject',
      url: config.siteLogoSmall,
      height: '60',
      width: '60',
    },
    sameAs: [
      'https://github.com/fstrauf/roadvagabonds',
      'http://instagram.com/roadvagabonds',        
      'https://www.youtube.com/channel/UC0j9AJvGXFZRQjJ-qywQkFg',    
    ],
  })

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': isBlog ? 'Blog' : 'WebPage',
    url: URL,
    headline: config.siteHeadline,
    inLanguage: 'en',
    mainEntityOfPage: URL,
    description: siteDescription,
    name: title,
    author: {
      '@id': 'Road Vagabonds',
    },
    copyrightHolder: {
      '@id': 'Road Vagabonds',
    },
    copyrightYear: '2019',
    creator: {
      '@id': 'Road Vagabonds',
    },
    publisher: {
      '@id': 'Road Vagabonds',
    },
    datePublished: '2017-06-15',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: image,
    },
  }

  let schemaArticle = null

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': homeURL,
        name: 'Blog',
      },
      position: 1,
    },
  ]
  if (article) {
  schemaArticle = {
    '@context': 'http://schema.org',
    '@type': 'Article',
    author: {
      '@id': 'Road Vagabonds',
    },
    copyrightHolder: {
      '@id': 'Road Vagabonds',
    },
    copyrightYear: postNode.frontmatter.date,
    creator: {
      '@id': 'Road Vagabonds',
    },
    publisher: {
      '@id': 'Road Vagabonds',
      // '@id': `${config.siteUrl}/#creator`,
    },
    datePublished: postNode.frontmatter.date,
    dateModified: postNode.frontmatter.date,
    siteDescription,
    headline: title,
    articleBody: siteDescription,
    articleSection: postNode.frontmatter.categories,
    inLanguage: 'en',
    url: URL,
    name: title,
    image: {
      '@type': 'ImageObject',
      url: image,
    },
    mainEntityOfPage: URL,
  }
  itemListElement.push({
    '@type': 'ListItem',
    item: {
      '@id': URL,
      name: title,
    },
    position: 2,
  })
}


  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  }

  const siteNav = {
    '@context': 'http://schema.org',
    '@type': 'SiteNavigationElement',
    name: ['Home', 'services'],
    url: [`${homeURL}`, `${homeURL}/services`],
  }

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <link rel="alternate" hrefLang="x-default" href={URL} />
      {!article && <link rel="alternate" hrefLang={'en'} href={URL} />}
      <meta httpEquiv="content-language" content="en-au" />
      <meta name="description" content={siteDescription} />
      <meta name="image" content={image} />
      <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#343849" />
      <meta name="msapplication-TileColor" content="#3498db" />
      <meta property="og:site_name" content={config.facebook} />
      <meta property="og:url" content={URL} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={siteDescription} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta property="og:see_also" content="https://github.com/fstrauf/roadvagabonds" />
      <meta property="og:see_also" content="http://instagram.com/roadvagabonds" />
      <meta property="og:see_also" content="https://www.youtube.com/channel/UC0j9AJvGXFZRQjJ-qywQkFg" />
      {article && <meta name="article:published_time" content={postNode.frontmatter.date} />}
      {!article && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>}
      {article && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>}
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      <script type="application/ld+json">{JSON.stringify(siteNav)}</script>
      <script type="application/ld+json">{JSON.stringify(orgaCreator('identity'))}</script>
      <script type="application/ld+json">{JSON.stringify(orgaCreator('creator'))}</script>
    </Helmet>
  )
}

const seo = props => <StaticQuery query={querySEO} render={data => <Head {...props} data={data} />} />

export default seo

Head.propTypes = {
  pathname: PropTypes.string.isRequired,
  data: PropTypes.any.isRequired,
  project: PropTypes.bool,
  postNode: PropTypes.object,
  article: PropTypes.bool,
}

const querySEO = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      config: siteMetadata {
        title
        siteDescription
        siteShortName
        siteUrl
        siteLogo
        siteLogoSmall
        siteBanner
        siteBannerWidth
        siteBannerHeight
      }
    }
  }
`
