import 'react-toastify/dist/ReactToastify.css';

import '../styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

import TopBar from '../components/Shared/TopBar/TopBar';
import Footer from '../components/Shared/Footer/Footer';
import AuthProvider from '../Contexts/AuthProvider/AuthProvider';

const queryClient = new QueryClient()


export default function App({ Component, pageProps }) {

  return (

    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TopBar></TopBar>
        <Component  {...pageProps} />
        <ToastContainer />
        <Footer></Footer>
      </AuthProvider>

    </QueryClientProvider>
  )
}
