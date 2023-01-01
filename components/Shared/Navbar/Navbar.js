import { Button, Navbar, TextInput } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { VscSearch } from "react-icons/vsc";

const NavbarBottom = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchText = form.searchText.value;
    router.push(`/search/${searchText}`)
  }

  return (
    <div className="sticky top-0 z-40 max-w-[1440px] w-[95%] mx-auto">
      <Navbar
        fluid={true}
        rounded={true}

      >
        <form className="flex md:order-2 gap-1 items-center justify-center" onSubmit={handleSearch}>
          <TextInput
            id="small"
            type="text"
            sizing="sm"
            placeholder="type here..."
            name='searchText'
          />
          <Button size="sm" color='success' type='submit'>
            <VscSearch className="text-white"></VscSearch>
          </Button>
          <Navbar.Toggle />
        </form>
        <Navbar.Collapse >
          <Link
            href="/"
          >
            Home
          </Link>
          <Link href={`/category/latest`}>
            Latest
          </Link>
          <Link href={`/category/trending`}>
            Trending
          </Link>
          <Link href={`/category/political`}>
            Political
          </Link>
          <Link href={`/category/entertainment`}>
            Entertainment
          </Link>
          <Link href={`/category/sports`}>
            Sports
          </Link>
          <Link href={`/category/tech`}>
            Tech
          </Link>
          <Link href={`/category/lifestyle`}>
            LifeStyle
          </Link>
          <Link href={`/category/education`}>
            Education
          </Link>
          <Link href={`/category/international`}>
            International
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>

    // // <div className="sticky top-0 z-40 max-w-[1440px] w-[95%] mx-auto bg-white shadow pb-2">




    // //   <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
    // //     <div className="relative flex items-center justify-between">
    // //       <div className="flex items-center">

    // //         <ul className="flex items-center hidden space-x-8 lg:flex">
    // //           <li>
    // //             <Link
    // //               to="/"
    // //               aria-label="Our product"
    // //               title="Our product"
    // //               className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
    // //             >
    // //               Product
    // //             </Link>
    // //           </li>
    // //           <li>
    // //             <Link
    // //               href="/"
    // //               aria-label="Our product"
    // //               title="Our product"
    // //               className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
    // //             >
    // //               Features
    // //             </Link>
    // //           </li>
    // //           <li>
    // //             <a
    // //               href="/"
    // //               aria-label="Product pricing"
    // //               title="Product pricing"
    // //               className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
    // //             >
    // //               Pricing
    // //             </a>
    // //           </li>
    // //           <li>
    // //             <a
    // //               href="/"
    // //               aria-label="About us"
    // //               title="About us"
    // //               className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
    // //             >
    // //               About us
    // //             </a>
    // //           </li>
    // //         </ul>
    // //       </div>
    // //       <ul className="flex items-center hidden space-x-8 lg:flex">
    // //         <li>
    // //           <a
    // //             href="/"
    // //             aria-label="Sign in"
    // //             title="Sign in"
    // //             className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
    // //           >
    // //             Sign in
    // //           </a>
    // //         </li>
    // //         <li>
    // //           <a
    // //             href="/"
    // //             className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
    // //             aria-label="Sign up"
    // //             title="Sign up"
    // //           >
    // //             Sign up
    // //           </a>
    // //         </li>
    // //       </ul>
    // //       <div className="lg:hidden">
    // //         <button
    // //           aria-label="Open Menu"
    // //           title="Open Menu"
    // //           className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
    // //           onClick={() => setIsMenuOpen(true)}
    // //         >
    // //           <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
    // //             <path
    // //               fill="currentColor"
    // //               d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
    // //             />
    // //             <path
    // //               fill="currentColor"
    // //               d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
    // //             />
    // //             <path
    // //               fill="currentColor"
    // //               d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
    // //             />
    // //           </svg>
    // //         </button>
    // //         {isMenuOpen && (
    // //           <div className="absolute top-0 left-0 w-full">
    // //             <div className="p-5 bg-white border rounded shadow-sm">
    // //               <div className="flex items-center justify-between mb-4">
    // //                 <div>
    // //                   <a
    // //                     href="/"
    // //                     aria-label="Company"
    // //                     title="Company"
    // //                     className="inline-flex items-center"
    // //                   >
    // //                     <svg
    // //                       className="w-8 text-deep-purple-accent-400"
    // //                       viewBox="0 0 24 24"
    // //                       strokeLinejoin="round"
    // //                       strokeWidth="2"
    // //                       strokeLinecap="round"
    // //                       strokeMiterlimit="10"
    // //                       stroke="currentColor"
    // //                       fill="none"
    // //                     >
    // //                       <rect x="3" y="1" width="7" height="12" />
    // //                       <rect x="3" y="17" width="7" height="6" />
    // //                       <rect x="14" y="1" width="7" height="6" />
    // //                       <rect x="14" y="11" width="7" height="12" />
    // //                     </svg>
    // //                     <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
    // //                       Company
    // //                     </span>
    // //                   </a>
    // //                 </div>
    // //                 <div>
    // //                   <button
    // //                     aria-label="Close Menu"
    // //                     title="Close Menu"
    // //                     className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
    // //                     onClick={() => setIsMenuOpen(false)}
    // //                   >
    // //                     <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
    // //                       <path
    // //                         fill="currentColor"
    // //                         d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
    // //                       />
    // //                     </svg>
    // //                   </button>
    // //                 </div>
    // //               </div>
    // //               <nav>
    // //                 <ul className="space-y-4">
    // //                   <li>
    // //                     <a
    // //                       href="/"
    // //                       aria-label="Our product"
    // //                       title="Our product"
    // //                       className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
    // //                     >
    // //                       Product
    // //                     </a>
    // //                   </li>
    // //                   <li>
    // //                     <a
    // //                       href="/"
    // //                       aria-label="Our product"
    // //                       title="Our product"
    // //                       className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
    // //                     >
    // //                       Features
    // //                     </a>
    // //                   </li>
    // //                   <li>
    // //                     <a
    // //                       href="/"
    // //                       aria-label="Product pricing"
    // //                       title="Product pricing"
    // //                       className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
    // //                     >
    // //                       Pricing
    // //                     </a>
    // //                   </li>
    // //                   <li>
    // //                     <a
    // //                       href="/"
    // //                       aria-label="About us"
    // //                       title="About us"
    // //                       className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
    // //                     >
    // //                       About us
    // //                     </a>
    // //                   </li>
    // //                   <li>
    // //                     <a
    // //                       href="/"
    // //                       aria-label="Sign in"
    // //                       title="Sign in"
    // //                       className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
    // //                     >
    // //                       Sign in
    // //                     </a>
    // //                   </li>
    // //                   <li>
    // //                     <a
    // //                       href="/"
    // //                       className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
    // //                       aria-label="Sign up"
    // //                       title="Sign up"
    // //                     >
    // //                       Sign up
    // //                     </a>
    // //                   </li>
    // //                 </ul>
    // //               </nav>
    // //             </div>
    // //           </div>
    // //         )}
    // //       </div>
    // //     </div>
    // //   </div>


    // </div>
  );
};

export default NavbarBottom;