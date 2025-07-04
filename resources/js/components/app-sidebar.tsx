import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem, type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, Users, Plus } from 'lucide-react';
import AppLogo from './app-logo';
import { useState, useEffect } from 'react';

export function AppSidebar() {
    const { auth } = usePage<SharedData>().props;
    const [time, setTime] = useState(new Date());
    const [timezone, setTimezone] = useState<'LK' | 'UK' | 'AU' | 'CA' | 'NZ'>('LK');
    
    const userRole = auth.user.role;
    
    // Create main nav items based on user role
    const mainNavItems: NavItem[] = [
        {
            title: 'Dashboard',
            href: '/dashboard',
            icon: LayoutGrid,
        }
    ];
    
    // Only add Users section for superadmin, admin, and manager roles
    if (['superadmin', 'admin', 'manager'].includes(userRole)) {
        mainNavItems.push({
            title: 'Users',
            href: '/users',
            icon: Users,
        });
        // Add User button
        mainNavItems.push({
            title: 'Add User',
            href: '/users/create',
            icon: Plus, // You may need to import Plus from lucide-react
        });
    }

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
                        <SidebarMenuButton
                            size="lg"
                            asChild
                            className="flex items-center justify-center hover:bg-sidebar-accent/70 transition-colors"
                        >
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain
                    items={mainNavItems}
                    className="mb-4"
                    itemClassName="rounded-md px-3 py-2 flex items-center gap-2 hover:bg-sidebar-accent/60 transition-colors"
                    activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-semibold"
                />
                <div className="p-4 text-center">
                    <h2 className="text-sm font-semibold">Current Time</h2>
                    <div className="flex justify-center gap-4 mb-2">
                        <button
                            onClick={() => setTimezone('LK')}
                            className={`p-2 rounded ${timezone === 'LK' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            <img src="/flags/lk.png" alt="Sri Lanka" className="inline-block w-6 h-4" />
                        </button>
                        <button
                            onClick={() => setTimezone('UK')}
                            className={`p-2 rounded ${timezone === 'UK' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            <img src="/flags/gb.png" alt="United Kingdom" className="inline-block w-6 h-4" />
                        </button>
                        <button
                            onClick={() => setTimezone('AU')}
                            className={`p-2 rounded ${timezone === 'AU' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            <img src="/flags/au.png" alt="Australia" className="inline-block w-6 h-4" />
                        </button>
                        <button
                            onClick={() => setTimezone('CA')}
                            className={`p-2 rounded ${timezone === 'CA' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            <img src="/flags/ca.png" alt="Canada" className="inline-block w-6 h-4" />
                        </button>
                        <button
                            onClick={() => setTimezone('NZ')}
                            className={`p-2 rounded ${timezone === 'NZ' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            <img src="/flags/nz.png" alt="New Zealand" className="inline-block w-6 h-4" />
                        </button>
                    </div>
                    <p className="text-lg">{getTimeForTimezone()}</p>
                </div>
            </SidebarContent>

            <SidebarFooter>
                <NavFooter
                    items={footerNavItems}
                    className="mt-auto"
                    itemClassName="rounded-md px-3 py-2 flex items-center gap-2 hover:bg-sidebar-accent/60 transition-colors"
                />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
