import React from 'react'
import Meta from 'src/components/Meta'
import { Input } from 'src/components/Input'
import { Tab } from 'src/components/Tab'
import 'twin.macro'
import Posts from 'src/components/Posts'
import { usePostContext } from 'src/components/Posts'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  const { setPostType, postType, setQuery, query } = usePostContext()
  const { TabPane } = Tab

  return (
    <React.Fragment>
      <Meta
        metaTag={{
          title: 'next로 만드는 무한스크롤 ',
        }}
      />
      <header tw="w-full flex flex-col justify-center items-center">
        <Input
          type="text"
          icon={<FontAwesomeIcon icon={faSearch} />}
          placeholder="검색어를 입력하세요."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </header>
      <main tw="container mx-auto md:w-7/12 w-10/12">
        <section tw="border-b border-gray-300 ">
          <Tab activeKey={postType} onChange={(type) => setPostType(type)}>
            <TabPane name="A post" tabKey="a" />
            <TabPane name="B post" tabKey="b" />
          </Tab>
        </section>
        <Posts />
      </main>
    </React.Fragment>
  )
}
