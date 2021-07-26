import { usePost } from 'src/core/api/posts.hook'
import { PostType } from 'src/core/api/posts'
import { useRouter } from 'next/router'

export default function useDetail() {
  const router = useRouter()
  const { postType, id } = router.query

  const { data: post } = usePost({ postType: postType as PostType, id })

  return { post }
}
