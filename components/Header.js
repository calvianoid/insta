import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

export default function Header() {
  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-5 flex max-w-6xl items-center justify-between lg:mx-auto">
        {/* Left - Logo */}
        <div className="relative hidden h-24 w-24 cursor-pointer lg:inline-grid">
          <Image src="/logo_insta2.png" layout="fill" objectFit="contain" />
        </div>
        <div className="relative h-10 w-10 flex-shrink-0 cursor-pointer lg:hidden">
          <Image src="/logo_insta.png" layout="fill" objectFit="contain" />
        </div>

        {/* Middle - Search */}
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-tl-md p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-black focus:ring-black"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden" />
          <div className="navBtn relative">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-1 -right-2 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-cyan-700 text-xs text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src="/LOGO_CN.png"
            className="h-10 w-10 cursor-pointer rounded-full"
          />
        </div>
      </div>
    </div>
  )
}
