import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from '../Contexts/AuthProvider/AuthProvider';
import '../styles/globals.css';

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Shared/Navbar/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar';

const queryClient = new QueryClient()


export default function App({ Component, pageProps }) {

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Navbar></Navbar>
          <Component  {...pageProps} />
          <ToastContainer />
          <Footer></Footer>
        </AuthProvider>

      </QueryClientProvider>
    </div>
  )
}
