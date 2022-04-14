import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import CustomImage from '@/components/CustomImage'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            آخر الأخبار
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'لا يوجد مقالات'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, images } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-3 xl:space-y-0">
                    <dl>
                      <dt className="sr-only">نشرت في</dt>
                      <dd className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>

                    <div className="flex flex-col items-center sm:flex-row xl:col-span-3">
                      <div className="mx-2 my-8 w-full sm:my-0 sm:w-1/3">
                        <Link href={`/blog/${slug}`}>
                          <div className="overflow-hidden rounded-xl sm:px-0">
                            <CustomImage src={`${images[0]}`} alt={`${title} Cover`}></CustomImage>
                          </div>
                        </Link>
                      </div>
                      <div className="mx-2 w-full sm:w-2/3">
                        <div>
                          <div>
                            <h2 className="text-2xl font-bold">
                              <Link
                                href={`/blog/${slug}`}
                                data-cy="post-title"
                                className="hover:border-brand border-b-2 border-transparent duration-300 dark:text-gray-50"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap ">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="text-typeface-secondary dark:text-typeface-secondary-dark mb-8 mt-6 font-medium text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                          <Link
                            href={`/blog/${slug}`}
                            aria-label={`Read "${title}"`}
                            className="hover:border-brand mr-3 border-b-2 border-transparent text-sm font-medium uppercase text-primary-500 duration-300 hover:text-primary-600 dark:hover:text-primary-400"
                          >
                            اقرأ المزيد &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            كل المقالات &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
