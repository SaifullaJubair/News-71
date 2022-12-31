import 'react-toastify/dist/ReactToastify.css';

import '../styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

import TopBar from '../components/Shared/TopBar/TopBar';
import NavbarBottom from '../components/Shared/Navbar/Navbar';
import Footer from '../components/Shared/Footer/Footer';
import AuthProvider from '../Contexts/AuthProvider/AuthProvider';
import ScrollToTop from 'react-scroll-up';
import { HelmetProvider } from 'react-helmet-async';
import { BsArrowUpCircleFill } from 'react-icons/bs';



const queryClient = new QueryClient()


export default function App({ Component, pageProps }) {

  return (

    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HelmetProvider>
          <TopBar></TopBar>
          <NavbarBottom></NavbarBottom>
          <Component  {...pageProps} />
          <ToastContainer />
          <ScrollToTop showUnder={160} >
            <span className='text-4xl text-blue-600 hover:text-sky-600'><BsArrowUpCircleFill className='animate-bounce'></BsArrowUpCircleFill></span>
          </ScrollToTop>
          <Footer></Footer>
        </HelmetProvider>
      </AuthProvider>

    </QueryClientProvider >
  )
}
