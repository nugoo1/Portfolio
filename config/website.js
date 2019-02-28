const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Nuwan Goonewardena - Portfolio', // Navigation and Site Title
  siteTitleAlt: 'NG', // Alternative Site title for SEO
  siteTitleShort: 'NG', // short_name for manifest
  siteHeadline: 'Creating websites and graphics', // Headline for schema.org JSONLD
  siteUrl: 'https://www.stem.lk', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Nuwan Goonewardena Portfolio Website',
  author: 'NuGoo', // Author for schema.org JSONLD
  googleAnalyticsID: "UA-135220541-1",

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@nugoo', // Twitter Username
  ogSiteName: 'Stem.lk', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  // googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.black,
  backgroundColor: tailwind.colors.yellow,
}
