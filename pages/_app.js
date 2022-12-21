import AuthProvider from '../Contexts/AuthProvider/AuthProvider'
import '../styles/globals.css'

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Navbar from '../components/Shared/Navbar/Navbar'

const queryClient = new QueryClient()


export default function App({ Component, pageProps }) {

  return (

    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Navbar></Navbar>
        <Component {...pageProps} /></AuthProvider>
    </QueryClientProvider>


  )
}
