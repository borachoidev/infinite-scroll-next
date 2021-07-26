import styled from '@emotion/styled'
import React, { ReactElement } from 'react'
import tw from 'twin.macro'

interface Props {
  children?: Array<ReactElement<typeof TabPane>> | ReactElement<typeof TabPane>
  activeKey: string
  onChange: (key: string) => void
}
export const Tab = ({ children, activeKey, onChange }: Props) => {
  const tabPanes = React.Children.toArray(children) as React.ReactElement<TabPaneProps>[]

  if (tabPanes.length === 0) return null

  return (
    <section>
      <nav tw="flex justify-start w-full">
        {tabPanes.map((tabPane) => (
          <TabButton
            key={tabPane.props.tabKey}
            active={activeKey === tabPane.props.tabKey}
            onClick={() => onChange(tabPane.props.tabKey)}
          >
            {tabPane.props.name}
          </TabButton>
        ))}
      </nav>
      <div>{tabPanes.find((tabPane) => tabPane.props.tabKey === activeKey)?.props?.children}</div>
    </section>
  )
}

interface TabPaneProps {
  name: string
  tabKey: string
  children?: React.ReactNode
}

const TabPane = (props: TabPaneProps) => {
  return null
}

Tab.TabPane = TabPane
interface StyledProps {
  active?: boolean
}
const TabButton = styled.button<StyledProps>`
  ${tw`p-3  hover:bg-pink-200 rounded hover:text-pink-300 focus:outline-none`}
  ${(props) => props.active && tw`text-pink-400 `}
`
