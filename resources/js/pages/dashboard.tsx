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
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
                <div className="clock">
                    <h2>Current Time</h2>
                    <select
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value as 'LK' | 'UK' | 'AU' | 'CA' | 'NZ')}
                        className="mb-2 p-2 border rounded"
                    >
                        <option value="LK">🇱🇰</option>
                        <option value="UK">🇬🇧</option>
                        <option value="AU">🇦🇺</option>
                        <option value="CA">🇨🇦</option>
                        <option value="NZ">🇳🇿</option>
                    </select>
                    <p>{getTimeForTimezone()}</p>
                </div>
            </div>
        </AppLayout>
    );
}
