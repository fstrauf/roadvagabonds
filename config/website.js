import theme from '../../config/theme'

const meta = {
  // Metadata
  title: 'Road Vagabonds',
  siteDescription: 'Hi we are Vicky and Flo, currently residing in Manly, New South Wales Australia. We love to travel and explore Australia in our Toyota Landcruiser Troopcarrier (Troopy)',
  siteHeadline: 'Travel, life, tech and overlanding',
  siteTitleAlt: 'Road Vagabonds',
  siteShortName: 'Road Vagabonds',
  siteUrl: 'https://roadvagabonds.com', 
}

const social = {
  siteLogo: `${meta.siteUrl}/RoadVagabonds_Logo-01.png`,
  siteLogoSmall: `${meta.siteUrl}/RoadVagabonds_Logo-01.png`,
  siteBanner: `${meta.siteUrl}/RoadVagabonds_Logo-01.png`, 
  siteBannerWidth: '776',
  siteBannerHeight: '382',
  instagram: `roadvagabonds`,
}

const website = {
  ...meta,
  ...social,
  googleAnalyticsID: 'UA-47519312-1',

  // Manifest
  themeColor: theme.colors.main.dark,
  backgroundColor: theme.colors.main.light,
}

module.exports = website
