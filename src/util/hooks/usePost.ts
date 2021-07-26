import { usePosts } from 'src/core/api/posts.hook'
import { useState, useEffect } from 'react'
import useDebounce from './useDebounce'
import useIntersectionObserver from './useIntersectionObserver'

export default function usePost() {
  const [postType, setPostType] = useState('a')
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 150)

  const { data, fetchNextPage, hasNextPage } = usePosts({
    query: debouncedQuery,
    postType: postType as 'a' | 'b',
  })

  const { lastRef, visible } = useIntersectionObserver()

  useEffect(() => {
    if (visible && hasNextPage) {
      fetchNextPage()
    }
    // eslint-disable-next-line
  }, [visible])

  const posts = data?.pages.reduce((acc, page) => [...acc, ...page]) ?? []

  return {
    posts,
    postType,
    setPostType,
    query,
    setQuery,
    lastRef,
  }
}
