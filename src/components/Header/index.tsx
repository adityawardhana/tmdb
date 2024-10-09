"use client";

import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { SearchBar, SearchMobile, SearchResults } from "../Search";
import SearchProvider from "@/contexts/search";
import Menu from "./Menu";

const Header = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const pathname = usePathname();

  return (
    <SearchProvider>
      <div className="flex items-center justify-between py-5 md:py-4  px-4 lg:px-8 bg-neutral-900">
        <div className="flex items-center gap-4">
          <Link href="/">
            <h5 className="text-xl md:text-3xl">TMDB</h5>
          </Link>
          <Menu pathname={pathname} />
        </div>
        <SearchBar />
        <button onClick={() => setOpenMobile(true)} className="md:hidden" data-testid="searchButtonMobile">
          <CiSearch className="size-5" />
        </button>
      </div>

      {openMobile && <SearchMobile setOpenMobile={setOpenMobile} />}
      <SearchResults />
    </SearchProvider>
  );
};

export default Header;
