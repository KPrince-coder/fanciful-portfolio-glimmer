import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

const AdminSidebar = () => {
  const links = [
    {
      to: '/admin',
      icon: LayoutDashboard,
      label: 'Dashboard',
    },
    {
      to: '/admin/projects',
      icon: FolderKanban,
      label: 'Projects',
    },
    {
      to: '/admin/blogs',
      icon: FileText,
      label: 'Blogs',
    },
  ];

  return (
    <aside className="hidden lg:flex h-screen w-64 flex-col fixed left-0 top-0 border-r bg-background">
      <div className="flex h-14 items-center border-b px-6 font-semibold">
        Admin Dashboard
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {links.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50',
                isActive && 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50'
              )
            }
          >
            <Icon className="h-5 w-5" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;