'use client';
import { LuFolderCog, s } from 'react-icons/lu';

export const SidebarDropdown = ({ label, children, icon }) => {
  return (
    <details close>
      <summary
        className="cursor-pointer list-none flex items-center
      space-x-2 text-base-content transition-colors rounded-lg hover:bg-primary-focus hover:text-primary-content`}
"
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
