import type { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'
import { PostProvider } from 'src/components/Posts'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <PostProvider>
        <Component {...pageProps} />
      </PostProvider>
      <GlobalStyles />
    </QueryClientProvider>
  )
}
export default MyApp
