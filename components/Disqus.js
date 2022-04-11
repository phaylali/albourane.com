import { DiscussionEmbed } from 'disqus-react'
import siteMetadata from '@/data/siteMetadata'

const DisqusComments = ({ slug, title }) => {
  const disqusShortname = 'albourane'
  const disqusConfig = {
    url: `${siteMetadata.siteUrl}/blog/${slug}`,
    identifier: `${siteMetadata.siteUrl}/blog/${slug}`, // Single post id
    title: `${siteMetadata.siteUrl}/blog/${title}`, // Single post title
  }
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  )
}
export default DisqusComments
