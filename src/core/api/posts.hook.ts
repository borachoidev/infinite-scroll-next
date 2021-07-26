import { fetchList, PostType, PostData, fetchDetail } from './posts'
import { useInfiniteQuery, useQuery } from 'react-query'

export const usePosts = ({ postType, query }: { postType: PostType; query?: string }) => {
  return useInfiniteQuery(
    ['usePost', { postType, query }],
    async ({ pageParam = 0 }) => {
      const newPosts = await fetchList({ postType, pageNumber: pageParam, query })
      return newPosts
    },
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length === 0) return false
        const nextPageNumber = pages.reduce((prev, curr) => prev + curr.length, 0) / 10
        return nextPageNumber
      },
    },
  )
}

export const usePost = ({ postType, id }: { postType: PostType; id: string }) => {
  return useQuery<PostData>('useDetail', async () => {
    const response = await fetchDetail({ postType, id })
    return response
  })
}
