import './index.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {SexyLoader} from './SexyLoader'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SexyLoader></SexyLoader>
    </QueryClientProvider>
  )
}

export default App
