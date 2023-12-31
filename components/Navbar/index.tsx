import Link from 'next/link'
import { BiHomeCircle, BiSolidHomeCircle, BiHomeAlt2, BiSolidHomeAlt2, BiSearch, BiCodeBlock, BiHeart, BiSolidHeart, BiUser, BiSolidUser } from 'react-icons/bi'
import {CiHome, CiSearch, CiHeart, CiUser } from 'react-icons/ci'
import { GoHome, GoHomeFill } from 'react-icons/go'

export default function Navbar() {
    return (
        <div className="
            bg-neutral-900 text-3xl text-neutral-600
            w-full h-16
            fixed bottom-0
            flex justify-around items-center z-50
            ">
            <Link href={"/"}> <GoHome className='text-neutral-600' /> </Link>
            <Link href={"/search"}> <BiSearch /> </Link>
            <Link href={"/code"}> <BiCodeBlock /> </Link>
            <Link href={"/activity"}> <BiHeart /> </Link>
            <Link href={"/user"}> <BiUser /> </Link>
        </div>
    )
}