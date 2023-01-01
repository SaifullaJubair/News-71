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


  );
};

export default NavbarBottom;