'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const SidebarItem = ({ label, to, children, className, closeSidebar }) => {
  const path = usePathname();

  const isActive = path === to;

  return (
    <Link
      href={to}
      className={`flex items-center w-full space-x-2 "rounded-lg ${
        isActive && 'bg-primary text-primary-content'
      } ${className} ${!children && 'p-1 pl-2'}
      text-base-content transition-colors rounded-lg hover:bg-primary-focus hover:text-primary-content`}
      onClick={closeSidebar}
    >
      {children && (
        <span
          aria-hidden="true"
          className={`p-2 transition-colors rounded-lg group-hover:bg-primary-focus
      group-hover:text-primary-content ${isActive && 'bg-primary rounded-lg'}`}
        >
          {children}
        </span>
      )}
      <span>{label}</span>
    </Link>
  );
};
