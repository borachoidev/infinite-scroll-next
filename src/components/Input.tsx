import styled from '@emotion/styled'
import tw from 'twin.macro'
import { InputHTMLAttributes } from 'react'
import { useRef } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element
}

export const Input = ({ icon, ...props }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <InputWrapper
      onClick={(e: React.MouseEvent) => {
        inputRef.current?.focus()
      }}
    >
      {icon && <i tw="mx-1 text-gray-400">{icon}</i>}
      <StyledIntput ref={inputRef} {...props} />
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  ${tw`border border-pink-200 rounded-md pl-1 m-3 w-56 focus-within:border-pink-400 shadow-sm`}
`
const StyledIntput = styled.input`
  ${tw`p-2 w-44 focus:ring-0 focus:outline-none `}
`
