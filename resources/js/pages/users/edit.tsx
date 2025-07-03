import { Head, useForm } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import InputError from '@/components/input-error';
import { FormEventHandler } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

interface EditProps {
    user: User;
    availableRoles: string[];
}

export default function Edit({ user, availableRoles }: EditProps) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Users',
            href: '/users',
        },
        {
            title: `Edit ${user.name}`,
            href: `/users/${user.id}/edit`,
        }
    ];

    const { data, setData, patch, processing, errors } = useForm({
        name: user.name || '',
        email: user.email || '',
        password: '',
        role: user.role || '',
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route('users.update', user.id));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit User: ${user.name}`} />
            
            <div className="mb-6">
                <h1 className="text-2xl font-semibold">Edit User: {user.name}</h1>
            </div>
            
            <div className="max-w-2xl rounded-lg border p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="Enter full name"
                        />
                        <InputError message={errors.name} />
                    </div>
                    
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="Enter email address"
                        />
                        <InputError message={errors.email} />
                    </div>
                    
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password (leave blank to keep current)</Label>
                        <Input
                            id="password"
                            type="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Enter new password or leave blank"
                        />
                        <InputError message={errors.password} />
                    </div>
                    
                    <div className="grid gap-2">
                        <Label htmlFor="role">Role</Label>
                        <Select
                            value={data.role}
                            onValueChange={(value) => setData('role', value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                            <SelectContent>
                                {availableRoles.map((role) => (
                                    <SelectItem key={role} value={role}>
                                        {role.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <InputError message={errors.role} />
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <Button type="submit" disabled={processing}>Update User</Button>
                        <Button type="button" variant="outline" asChild>
                            <a href={route('users.index')}>Cancel</a>
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
