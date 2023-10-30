import { BiSearch } from "react-icons/bi"

export default function SearchBar() {
    return (
        <input className="
            w-full px-4 py-1 rounded-full my-2
            bg-neutral-800 caret-white text-neutral-50
            placeholder:text-neutral-600
            focus:outline-none" 
            type="text" placeholder={`Search`} />
    )
}