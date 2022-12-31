import 'react-toastify/dist/ReactToastify.css';

import '../styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

import TopBar from '../components/Shared/TopBar/TopBar';
import Footer from '../components/Shared/Footer/Footer';
import AuthProvider from '../Contexts/AuthProvider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import NavbarBottom from '../components/Shared/Navbar/Navbar';


const queryClient = new QueryClient()


export default function App({ Component, pageProps }) {

  return (

    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProvider>
          <TopBar></TopBar>
          <NavbarBottom></NavbarBottom>
          <Component  {...pageProps} />
          <ToastContainer />
          <Footer></Footer>
        </AuthProvider>
      </HelmetProvider>

    </QueryClientProvider>
  )
}
