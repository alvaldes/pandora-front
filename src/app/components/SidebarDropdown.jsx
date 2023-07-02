'use client';
import { usePathname } from 'next/navigation';
import { LuFolderCog, s } from 'react-icons/lu';

export const SidebarDropdown = ({ label, children, icon, toList = [] }) => {
  const path = usePathname();

  const isActive = toList.includes(path);
  return (
    <details open={false}>
      <summary
        className={`cursor-pointer list-none flex items-center space-x-2
        text-base-content transition-colors rounded-lg ${
          isActive && 'bg-primary text-primary-content'
        } hover:bg-primary-focus hover:text-primary-content`}
      >
        {icon && (
          <span
            aria-hidden="true"
            className={`p-2 transition-colors rounded-lg group-hover:bg-primary-focus
      group-hover:text-primary-content`}
          >
            {icon == 'LuFolderCog' && <LuFolderCog />}
          </span>
        )}
        <span>{label}</span>
      </summary>
      <ul className="ml-5">{children}</ul>
    </details>
  );
};
