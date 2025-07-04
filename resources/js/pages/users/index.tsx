import { Head, Link, router } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Edit, Trash, User as UserIcon, Mail, Shield, Search as SearchIcon } from 'lucide-react';
import { useState, useMemo } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    role_label?: string;
}

interface UsersIndexProps {
    users: User[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/users',
    }
];

export default function Index({ users }: UsersIndexProps) {
    const [deleteUser, setDeleteUser] = useState<User | null>(null);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const formatRole = (role: string) => {
        return role.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    };

    const filteredUsers = useMemo(() => {
        if (!searchQuery.trim()) return users;
        
        const query = searchQuery.toLowerCase().trim();
        return users.filter(user => 
            user.name.toLowerCase().includes(query) || 
            user.email.toLowerCase().includes(query) || 
            (user.role_label || formatRole(user.role)).toLowerCase().includes(query)
        );
    }, [users, searchQuery]);

    const confirmDelete = (user: User) => {
        setDeleteUser(user);
        setIsDeleteDialogOpen(true);
    };

    const handleDelete = () => {
        if (deleteUser) {
            router.delete(route('users.destroy', deleteUser.id));
        }
        setIsDeleteDialogOpen(false);
    };
    
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            
            <div className="mb-6 flex justify-between items-center">
                <h1 className="text-2xl font-semibold flex items-center gap-2">
                    <UserIcon className="h-7 w-7 text-blue-600" /> Users
                </h1>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href={route('users.create')}>
                        <Plus className="mr-2 h-4 w-4" /> Add User
                    </Link>
                </Button>
            </div>
            
            {/* Search Bar */}
            <div className="mb-6 bg-white p-4 rounded-lg border shadow-sm">
                <div className="relative max-w-md">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                        type="text"
                        placeholder="Search users by name, email or role..."
                        className="pl-10 w-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                {searchQuery && (
                    <div className="mt-2 text-sm text-gray-500">
                        Found {filteredUsers.length} {filteredUsers.length === 1 ? 'user' : 'users'} matching "{searchQuery}"
                    </div>
                )}
            </div>
            
            <div className="rounded-lg border shadow-sm overflow-hidden bg-white">
                <Table className="min-w-full divide-y divide-gray-200">
                    <TableHeader className="bg-gray-50">
                        <TableRow>
                            <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</TableHead>
                            <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</TableHead>
                            <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</TableHead>
                            <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</TableHead>
                            <TableHead className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="bg-white divide-y divide-gray-100">
                        {filteredUsers.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                                    {searchQuery ? (
                                        <div className="flex flex-col items-center justify-center">
                                            <SearchIcon className="h-10 w-10 text-gray-300 mb-2" />
                                            <p className="text-lg">No users found matching your search</p>
                                            <Button 
                                                variant="link" 
                                                onClick={() => setSearchQuery('')}
                                                className="mt-2"
                                            >
                                                Clear search
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center">
                                            <UserIcon className="h-10 w-10 text-gray-300 mb-2" />
                                            <p className="text-lg">No users available</p>
                                        </div>
                                    )}
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredUsers.map((user) => (
                                <TableRow key={user.id} className="hover:bg-gray-50 transition-colors">
                                    <TableCell className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-700">{user.id}</TableCell>
                                    <TableCell className="px-6 py-4 whitespace-nowrap flex items-center gap-2">
                                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                            <UserIcon className="h-4 w-4" />
                                        </div>
                                        <span className="font-medium text-gray-900">{user.name}</span>
                                    </TableCell>
                                    <TableCell className="px-6 py-4 whitespace-nowrap flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-gray-400" />
                                        <span className="text-gray-700">{user.email}</span>
                                    </TableCell>
                                    <TableCell className="px-6 py-4 whitespace-nowrap">
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            <Shield className="h-3.5 w-3.5" />
                                            <span>{user.role_label ?? formatRole(user.role)}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-6 py-4 text-right whitespace-nowrap">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="outline" size="sm" asChild className="border-gray-300">
                                                <Link href={route('users.edit', user.id)}>
                                                    <Edit className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                            <Button 
                                                variant="destructive" 
                                                size="sm" 
                                                onClick={() => confirmDelete(user)}
                                                className="bg-red-600 hover:bg-red-700 text-white"
                                            >
                                                <Trash className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the user 
                            "{deleteUser?.name}" and remove their data from the system.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDelete} className="bg-red-600 text-white hover:bg-red-700">
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </AppLayout>
    );
}
