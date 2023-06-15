import Link from "next/link";
import { UserItem } from "./UserItem";



export const Navbar = () => {
    return (
        <div className="navbar bg-base-100 px-4">
          <div className="drawer-content flex flex-col items-center justify-center">
              {/* Page content here */}
              
              <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">
                <span class="sr-only">Open main menu</span>
                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              </label>
          </div>
          <div className="flex-1">
            <Link href={'/'} className="btn btn-ghost normal-case text-xl">Pandora</Link>
          </div>
          <div className="flex-none">
            <UserItem className="dropdown dropdown-end" />
          </div>
        </div>
    );
}