import List from './List'
import 'twin.macro'
import usePost from '~/util/hooks/usePost'
import constate from 'constate'

export const [PostProvider, usePostContext] = constate(usePost)

export default function Article() {
  const { posts, lastRef } = usePostContext()

  return (
    <article>
      <ul tw="border border-gray-300 rounded my-3 shadow-inner p-4">
        {posts?.map((post) => (
          <List key={post.id} post={post} />
        ))}
        <div ref={lastRef} />
      </ul>
    </article>
  )
}
