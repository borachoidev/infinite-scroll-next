import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import tw from 'twin.macro'
import useDetail from 'src/util/hooks/useDetail'
import React from 'react'
import Meta from '~/components/Meta'

const Post = () => {
  const { post } = useDetail()

  const router = useRouter()

  return (
    <React.Fragment>
      <Meta
        metaTag={{
          title: `${post?.id}. ${post?.title} `,
        }}
      />
      <section tw="container mx-auto w-6/12">
        <article tw="border border-gray-300 my-3 p-4">
          <HeaderThree>{post?.title}</HeaderThree>
          <Description>{post?.content}</Description>
        </article>
        <Button
          type="button"
          onClick={() => {
            router.back()
          }}
        >
          뒤로가기
        </Button>
      </section>
    </React.Fragment>
  )
}

const Button = styled.button`
  ${tw`p-3 bg-pink-400 text-white hover:bg-pink-500 rounded hover:text-pink-300 focus:outline-none `}
`

const HeaderThree = styled.h3`
  ${tw`text-2xl text-center m-5`}
`
const Description = styled.div`
  ${tw`p-5 mb-3`}
`

export default Post
