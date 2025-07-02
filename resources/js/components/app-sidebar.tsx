import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid } from 'lucide-react';
import AppLogo from './app-logo';
import { useState, useEffect } from 'react';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    const [time, setTime] = useState(new Date());
    const [timezone, setTimezone] = useState<'LK' | 'UK' | 'AU' | 'CA' | 'NZ'>('LK');

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const getTimeForTimezone = () => {
        const timeZoneMap = {
            LK: 'Asia/Colombo',
            UK: 'Europe/London',
            AU: 'Australia/Sydney',
            CA: 'America/Toronto',
            NZ: 'Pacific/Auckland',
        };
        const options: Intl.DateTimeFormatOptions = { timeZone: timeZoneMap[timezone], hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return new Intl.DateTimeFormat('en-GB', options).format(time);
    };

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
                <div className="p-4 text-center">
                    <h2 className="text-sm font-semibold">Current Time</h2>
                    <div className="flex justify-center gap-4 mb-2">
                        <button
                            onClick={() => setTimezone('LK')}
                            className={`p-2 rounded ${timezone === 'LK' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            🇱🇰
                        </button>
                        <button
                            onClick={() => setTimezone('UK')}
                            className={`p-2 rounded ${timezone === 'UK' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            🇬🇧
                        </button>
                        <button
                            onClick={() => setTimezone('AU')}
                            className={`p-2 rounded ${timezone === 'AU' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            🇦🇺
                        </button>
                        <button
                            onClick={() => setTimezone('CA')}
                            className={`p-2 rounded ${timezone === 'CA' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            🇨🇦
                        </button>
                        <button
                            onClick={() => setTimezone('NZ')}
                            className={`p-2 rounded ${timezone === 'NZ' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            🇳🇿
                        </button>
                    </div>
                    <p className="text-lg">{getTimeForTimezone()}</p>
                </div>
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
