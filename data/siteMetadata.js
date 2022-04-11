const siteMetadata = {
  title: 'موقع ألبوران | Albourane Website',
  author: 'تعاونية ألبوران',
  headerTitle: 'البوران',
  description:
    'موقع ألبوران يهتم بكل ما يخص الصيد البحري التقليدي بصفة عامة و تعاونية ألبوران للصيد البحري التقليدي بوادي لو بصفة خاصة',
  language: 'ar-MA',
  theme: 'system',
  siteUrl: 'https://albourane.com',
  siteLogo: '/static/images/avatar.png',
  miniAvatar: '/static/images/avatar38x38.png',
  placeholder: '/static/images/image-placeholder.png',
  error: '/static/images/image-error.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'help@albourane.com',
  twitter: 'https://twitter.com/albourane',
  facebook: 'https://facebook.com/albourane',
  youtube: 'https://www.youtube.com/channel/UCwfosdgvC4vKmHiQAiRTAWQ',
  instagram: 'https://www.instagram.com/albourane',
  locale: 'ar-MA',
  analytics: {
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },

  comment: {
    // If you want to use a commenting system other than giscus you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'disqus', // supported providers: giscus, utterances, disqus

    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: 'albourane',
    },
  },
}

module.exports = siteMetadata
