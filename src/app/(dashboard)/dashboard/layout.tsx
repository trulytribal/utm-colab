import Header from '@/components/header';
import { ModeToggle } from '@/components/mode-toggle';
import SidebarHeader from '@/components/sidebar-header';
import React from 'react';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SidebarHeader>{children}</SidebarHeader>
    </div>
  );
}
