import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import CustomImage from '@/components/CustomImage'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="ابحث عن مقال"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="ابحث عن مقال"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute left-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul>
          {!filteredBlogPosts.length && 'لا يوجد مقالات'}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags, images } = frontMatter
            return (
              <li key={slug} className="py-4">
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
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
