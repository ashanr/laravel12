import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    const [time, setTime] = useState(new Date());
    const [timezone, setTimezone] = useState<'LK' | 'UK' | 'AU' | 'CA' | 'NZ'>('LK');
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
    ]);
    const [sortConfig, setSortConfig] = useState<{ key: keyof typeof users[0]; direction: 'asc' | 'desc' } | null>(null);

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

    const handleSort = (key: keyof typeof users[0]) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig?.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
        setUsers((prevUsers) =>
            [...prevUsers].sort((a, b) => {
                if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
                if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
                return 0;
            })
        );
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">1</div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">2</div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                  
                    </div>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">4</div>
                </div>
    
                <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-lg">
                        <h3 className="mb-2 text-xl font-semibold">Available Roles</h3>
                        <ul className="text-sm text-muted-foreground list-disc">
                            <li>Super Admin</li>
                            <li>Admin</li>
                            <li>Student Manager</li>
                            <li>Staff</li>
                            <li>Premium Affiliate</li>
                            <li>Normal Affiliate</li>
                        </ul>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
