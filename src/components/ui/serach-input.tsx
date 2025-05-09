"use client"

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Input } from "./input"
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  defaultValue?: string;
  hideOnSearch?: boolean;
}
export const SearchInput = ({defaultValue, hideOnSearch}: Props) => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState(defaultValue ?? '');
  const pathName = usePathname();
  const handleSearchEnter = () => {
    if(searchInput){
      router.push(`/search?q=${encodeURIComponent(searchInput)}`);
    }
  }
  
  if(hideOnSearch && pathName === '/search') return null;

  return(
    <Input 
      placeholder="Buscar"
      icon={faMagnifyingGlass}
      value={searchInput}
      onChange={t => setSearchInput(t)}
      onEnter={handleSearchEnter}
      filled
    />
  )
}  