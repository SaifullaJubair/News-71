import AuthProvider from '../Contexts/AuthProvider/AuthProvider'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Navbar from '../components/Shared/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'
import Footer from '../components/Shared/Navbar/Footer/Footer';

const queryClient = new QueryClient()


export default function App({ Component, pageProps }) {

  return (

    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Navbar></Navbar>
     <div className='bg-red-500'>
     <Component  {...pageProps}  />
     </div>
  
        <ToastContainer />
        <Footer></Footer>
        </AuthProvider>
      
    </QueryClientProvider>
    


  )
}
