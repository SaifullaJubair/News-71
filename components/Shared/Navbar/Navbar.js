import { Button, Navbar, TextInput } from "flowbite-react";
import { useRouter } from "next/router";
import { VscSearch } from "react-icons/vsc";

const NavbarBottom = () => {

  const router =useRouter()

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
          <Navbar.Link
            href="/"
            active={true}
          >
            Home
          </Navbar.Link>
          <Navbar.Link href={`/category/latest`}>
            Latest
          </Navbar.Link>
          <Navbar.Link href={`/category/trending`}>
            Trending
          </Navbar.Link>
          <Navbar.Link href={`/category/political`}>
            Political
          </Navbar.Link>
          <Navbar.Link href={`/category/entertainment`}>
            Entertainment
          </Navbar.Link>
          <Navbar.Link href={`/category/sports`}>
            Sports
          </Navbar.Link>
          <Navbar.Link href={`/category/tech`}>
            Tech
          </Navbar.Link>
          <Navbar.Link href={`/category/lifestyle`}>
            LifeStyle
          </Navbar.Link>
          <Navbar.Link href={`/category/education`}>
            Education
          </Navbar.Link>
          <Navbar.Link href={`/category/international`}>
            International
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarBottom;