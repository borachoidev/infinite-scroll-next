import styled from '@emotion/styled'
import tw from 'twin.macro'
import { PostData } from 'src/core/api/posts'
import Link from 'next/link'

interface Props {
  post: PostData
}

export default function List({ post }: Props) {
  const { id, title, content, type: postType } = post
  return (
    <Link href={`/${postType}?id=${id}`}>
      <StyledList>
        <header>
          <h3>
            <Id>{id}.</Id>
            {title}
          </h3>
        </header>
        <Content>{content}</Content>
      </StyledList>
    </Link>
  )
}

const StyledList = styled.li`
  ${tw`mx-2 my-5`}
`
const Content = styled.div`
  ${tw`my-1 text-sm text-gray-700 line-clamp-3`}
`
const Id = styled.span`
  ${tw`mr-2 text-pink-500`}
`
